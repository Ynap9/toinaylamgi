import type { Todo } from './todos';

export type Language = 'vi' | 'en';

export const copy = {
  vi: {
    tiers: ['QUỐC DÂN', 'HIẾM', 'CỰC PHẨM', 'TỐI MẬT', '★ ĐẶC BIỆT'],
    title: 'Mở hòm lựa chọn tối nay làm gì', counterPrefix: 'Đã ghi nhận', counterSuffix: 'hòm',
    counterTitle: 'Lượt quay hoàn tất được ghi nhận trên website này', caseLabel: 'Mở hòm tối nay làm gì',
    soundOn: 'Âm thanh bật', soundOff: 'Âm thanh tắt', turnSoundOff: 'Tắt âm thanh', turnSoundOn: 'Bật âm thanh',
    github: 'Mở mã nguồn trên GitHub', starsPending: 'chưa tải', language: 'Switch to English',
    opening: 'ĐANG MỞ HÒM…', openAgain: 'MỞ LẠI', open: 'MỞ HÒM', newItem: 'VẬT PHẨM MỚI', continue: 'TIẾP TỤC',
    whatsInside: 'TRONG HÒM CÓ GÌ?', items: 'Vật phẩm trong hòm', mystery: '★ KÈO BÍ ẨN', mysteryAlt: 'Kèo bí ẩn hạng vàng',
    footer: 'Fan-made · SFX: Valve /', customTodo: 'Lựa chọn của tôi',
  },
  en: {
    tiers: ['MIL-SPEC', 'RESTRICTED', 'CLASSIFIED', 'COVERT', '★ SPECIAL ITEM'],
    title: 'Open a what-to-do-tonight case', counterPrefix: 'Recorded', counterSuffix: 'cases',
    counterTitle: 'Completed spins recorded on this website', caseLabel: 'Open a what-to-do-tonight case',
    soundOn: 'Sound on', soundOff: 'Sound off', turnSoundOff: 'Mute sound', turnSoundOn: 'Enable sound',
    github: 'Open source on GitHub', starsPending: 'not loaded', language: 'Chuyển sang tiếng Việt',
    opening: 'OPENING CASE…', openAgain: 'OPEN AGAIN', open: 'OPEN CASE', newItem: 'NEW ITEM', continue: 'CONTINUE',
    whatsInside: "WHAT'S IN THE CASE?", items: 'Items in this case', mystery: '★ MYSTERY PLAN', mysteryAlt: 'Gold-tier mystery plan',
    footer: 'Fan-made · SFX: Valve /', customTodo: 'My choice',
  },
} as const;

const englishNames: Record<number, [string, string]> = {
  0:['Read comics','Leisure'],1:['Rest & take medicine','Health'],2:['Get some fresh air','Outdoors'],3:['Play xiangqi','Board game'],
  4:['Play video games','Leisure'],5:['Play chess','Board game'],6:['Watch a movie at home','At home'],7:['Play Go','Board game'],
  8:['Go to a cafe','Cafe'],9:['Read a book','Self-growth'],10:['Go to the cinema','Cinema'],11:['Hang out','Friends'],
  12:['Study','Self-growth'],13:['Code','Programming'],14:['Work','Deadline'],15:['Visit hometown','Family'],
};

export function foodName(food: Todo, language: Language) {
  return language === 'en' ? englishNames[food.image]?.[0] ?? food.name : food.name;
}

export function foodSubtitle(food: Todo, language: Language) {
  if (language === 'vi') return food.sub;
  return englishNames[food.image]?.[1] ?? copy.en.customTodo;
}
