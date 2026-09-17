import { todos, type Todo } from './todos';
import { copy } from './i18n';
export type CustomTodo = { id: string; name: string };
export type PoolProfile = { disabled: number[]; custom: CustomTodo[]; revision: number };
export const emptyProfile = (): PoolProfile => ({ disabled: [], custom: [], revision: 0 });
const ids = new Set(todos.map(f => f.image));
export function validateProfile(input: unknown): PoolProfile {
 if (!input || typeof input !== 'object') throw new Error('Invalid profile');
 const p = input as Record<string, unknown>;
 if (Object.keys(p).some(k => !['disabled','custom','revision'].includes(k)) || !Array.isArray(p.disabled) || !Array.isArray(p.custom) || !Number.isSafeInteger(p.revision) || (p.revision as number)<0) throw new Error('Invalid profile');
 if (p.disabled.length>todos.length || p.custom.length>50 || new Set(p.disabled).size!==p.disabled.length || p.disabled.some(id=>!ids.has(id))) throw new Error('Invalid todos');
 const custom = p.custom.map((item: unknown): CustomTodo => {
  if (!item || typeof item!=='object') throw new Error('Invalid todo');
  const f=item as Record<string,unknown>;
  if(Object.keys(f).some(k=>!['id','name'].includes(k)) || typeof f.id!=='string' || !/^[0-9a-f-]{36}$/i.test(f.id) || typeof f.name!=='string' || !f.name.trim() || f.name.length>60 || /[\x00-\x1f\x7f]/.test(f.name)) throw new Error('Invalid todo');
  return {id:f.id,name:f.name.trim().normalize('NFC')};
 });
 if(new Set(custom.map(f=>f.id)).size!==custom.length || todos.length-p.disabled.length+custom.length<1) throw new Error('Keep at least one todo');
 return {disabled:p.disabled as number[],custom,revision:p.revision as number};
}
export function personalTodos(profile: PoolProfile): Todo[] {
 return [...todos.filter(f=>!profile.disabled.includes(f.image)), ...profile.custom.map(f=>({customId:f.id,name:f.name,image:-1,sub:copy.vi.customTodo,quip:'',rarity:0}))];
}
export function pickTodo(items: Todo[], random=Math.random): Todo {
 if(!items.length) throw new Error('No todos');
 return items[Math.min(items.length-1,Math.floor(random()*items.length))];
}
