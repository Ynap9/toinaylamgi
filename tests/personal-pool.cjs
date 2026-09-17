const assert=require('node:assert/strict');const {buildSync}=require('esbuild');const {mkdtempSync,rmSync}=require('node:fs');const {tmpdir}=require('node:os');const {join}=require('node:path');
const out=mkdtempSync(join(tmpdir(),'pool-test-'));try{
 buildSync({entryPoints:['src/lib/personal-pool.ts','src/lib/todos.ts'],outdir:out,bundle:true,platform:'node',format:'cjs'});
 const {emptyProfile,validateProfile,personalTodos,pickTodo}=require(join(out,'personal-pool.js'));const {todos}=require(join(out,'todos.js'));
 const all=todos.map(f=>f.image);assert.throws(()=>validateProfile({disabled:all,custom:[],revision:0}));assert.throws(()=>validateProfile({disabled:[999],custom:[],revision:0}));
 assert.throws(()=>validateProfile({disabled:[],custom:[{id:crypto.randomUUID(),name:'Solo',price:85}],revision:0}));
 const p=validateProfile({disabled:all,custom:[{id:crypto.randomUUID(),name:'Solo'}],revision:0});const items=personalTodos(p);assert.equal(items.length,1);assert.equal(pickTodo(items).name,'Solo');assert.throws(()=>pickTodo([]));
 const catalog=personalTodos(emptyProfile());assert.equal(catalog.length,todos.length);
 assert.equal(pickTodo(catalog,()=>0),catalog[0]);assert.equal(pickTodo(catalog,()=>.9999999),catalog[catalog.length-1]);
 console.log('PASS: empty, single-item, removed IDs, legacy fields and uniform selection.');
}finally{rmSync(out,{recursive:true,force:true})}
