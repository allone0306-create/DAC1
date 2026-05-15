import React from 'react';
import { motion } from 'framer-motion';

interface LivingModule {
  title: string;
  characteristic: string;
  summary: string;
  desc: string;
  img: string;
}

const modules: LivingModule[] = [
  { 
    title: '山居', 
    characteristic: '垂直叙事 · 隐匿 · 绝对孤独',
    summary: '将建筑的尺度隐入峰峦的起伏，在海拔与云端之间，完成人与大地高度的精神交割。',
    desc: '在海拔与云端之间构建的垂直生活系统。重点在于利用地形的落差创造视角的跳跃，通过“林泉之心”的现代转译，让居住者在物理高度的提升中完成精神的洗礼。强调木材与岩石的原始质感，构建一个屏蔽噪音的真空场域。', 
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop' 
  },
  { 
    title: '湖居', 
    characteristic: '水平延伸 · 倒影 · 时间留白',
    summary: '致力于捕捉水面的波光与留白，将生活的边界消融在倒影中，实现空间与时间的水平共振。',
    desc: '基于水域生态的横向生活系统。强调建筑与水面的互感关系，通过大量的玻璃留白与亲水平台，让“水的流动”进入室内的生活节奏。这是一个关于“慢”的系统，利用倒影与天光的变幻，消除空间边界，实现物我合一的静谧体验。', 
    img: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=1200&auto=format&fit=crop' 
  },
  { 
    title: '村落', 
    characteristic: '社群共生 · 邻里温情 · 土地记忆',
    summary: '旨在重组土地碎片与邻里关系，在现代聚落的肌理中，重建一种有根可循的生命共同体。',
    desc: '重构当代乡村契约的社会化生活系统。不只是建筑的堆叠，而是情感纽带的复兴。通过共享厨房、社区书屋和手作工坊等功能模块，打破城市公寓的孤岛状态。保留原有的土地肌理与农业景观，让第二生活拥有真实的人情味与烟火气。', 
    img: 'https://images.unsplash.com/photo-1505814534324-f13927697352?q=80&w=1200&auto=format&fit=crop' 
  },
  { 
    title: '康养', 
    characteristic: '生命节律 · 疗愈 · 自然处方',
    summary: '通过精密的环境感知设计，将自然的光、气、场转化为生命能量，构建一个自我修复的微型气候。',
    desc: '身心全方位调和的能量平衡系统。结合气候、植被与在地医药文化，构建一个“会呼吸”的建筑场域。通过光、声、气味的精密设计，引导居住者调节呼吸节奏。这不仅是养老，更是生命力的重置，让自然成为最好的药方。', 
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop' 
  },
  { 
    title: '艺术', 
    characteristic: '无用之用 · 灵感触发 · 博物馆居住',
    summary: '将居住演化为一场永不落幕的感官实验，使空间成为直觉的延伸，达成美学与日常的无缝渗透。',
    desc: '将“艺术介入”作为底层逻辑的创造性生活系统。空间本身即是作品，通过非功能性的动线设计与戏剧性的光影处理，激发居住者的直觉思维。在这里，生活是一场持续的展览，每扇窗都是一副流动的风景画，让日常成为艺术。', 
    img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop' 
  },
  { 
    title: '女性疗愈', 
    characteristic: '情感安全 · 柔美 · 自我重构',
    summary: '以极致的细腻关怀为核心，织就一个包裹心灵的安全场域，让生命在柔和的节律中自发重绽。',
    desc: '专为女性精神需求定制的私密生活系统。强调空间的包裹感与安全性，采用低饱和度的色彩与圆润的形态设计，缓解现代都市女性的焦虑感。配套有深度的冥想空间、情绪咖啡馆与共情社群，在温柔的场域中实现自我的深度修复。', 
    img: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1200&auto=format&fit=crop' 
  },
];

const SecondLifeSystem: React.FC = () => {
  return (
    <main className="bg-white text-black pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-32"
        >
          <span className="text-xs tracking-[0.3em] text-black/40 uppercase mb-4 block">Product Definition</span>
          <h1 className="text-5xl md:text-7xl font-serif-sc leading-tight mb-12">
            第二生活系统：<br />
            定义未来的旅居方式。
          </h1>
          <p className="text-xl text-black/60 leading-relaxed font-light">
            第二生活不是逃避，而是回归。我们为厌倦了城市快节奏的现代人，
            在自然与人文的交汇点，构建了一套完整的精神与生活配套设施。
          </p>
        </motion.div>

        <div className="space-y-40">
          {modules.map((m, index) => (
            <motion.div 
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                    src={m.img} 
                    alt={m.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-serif-sc opacity-10 leading-none">0{index + 1}</span>
                  <div className="h-px w-12 bg-black/10" />
                  <span className="text-[10px] tracking-[0.3em] text-black/40 uppercase font-medium">{m.characteristic}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif-sc tracking-widest">{m.title}系统</h2>
                
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-black/70 leading-relaxed font-light">
                    {m.desc}
                  </p>
                  <p className="text-sm text-black/40 italic font-serif-sc border-l-2 border-black/5 pl-6">
                    {m.summary}
                  </p>
                </div>
                
                <div className="pt-6">
                  <button className="text-[10px] tracking-[0.4em] uppercase border-b border-black pb-2 hover:opacity-40 transition-opacity font-bold">
                    Explore System
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SecondLifeSystem;
