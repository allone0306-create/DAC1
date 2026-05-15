import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const categories = ['全部', '度假酒店', '精品民宿', '文旅综合体', '第三空间'];

const cases = [
  { 
    id: 1, 
    title: '成都华尔道夫', 
    category: '度假酒店', 
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
    designerView: '在此项目中，我们试图挑战“垂直奢华”的定义。成都华尔道夫不只是一个高空酒店，它是一个将装饰艺术（Art Deco）与当代东方神韵缝合的垂直景观。我们利用光线的散射模拟成都的云雾，在极度的奢华中植入一种由于空间层级带来的“静谧感”。'
  },
  { 
    id: 2, 
    title: '重庆美利亚', 
    category: '度假酒店', 
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200',
    designerView: '山城重庆的复杂地形是设计的起点。我们采用了“消隐”的策略，让建筑顺应山势坡度，仿佛是从崖壁中自然生长出来的。通过大量的灰空间设计，我们将江雾与山风引入室内，实现了一种与大地共呼吸的居住体感。'
  },
  { 
    id: 3, 
    title: '山西芃篱人家', 
    category: '精品民宿', 
    img: 'https://images.unsplash.com/photo-1525625230556-8e8adcaae75a?q=80&w=1200',
    designerView: '这是一个关于“土”的当代叙事。我们挖掘了山西传统民居的筑造智慧，将原始的夯土材料进行改性处理，在保留土地温度的同时满足了当代生活的舒适度。芃篱人家是一个时间的容器，记录着黄土地上的生命脉动。'
  },
  { 
    id: 4, 
    title: '大观原点', 
    category: '文旅综合体', 
    img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200',
    designerView: '作为整个文旅场域的“原点”，该项目承担着精神指引的功能。我们设计了一个巨大的圆形开放场域，象征着生命与自然的循环。通过对非日常空间的极致塑造，我们引导访问者在这里放下城市的纷扰，重启生活。'
  },
  { 
    id: 5, 
    title: '西安JW万豪', 
    category: '度假酒店', 
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200',
    designerView: '西安的历史厚度既是资源也是压力。在JW万豪的设计中，我们避开了沉重的符号堆砌，而是提取了丝绸之路的律动感。通过大面积的流线型金属装饰与大理石的碰撞，创造了一种“大唐盛世”在数字化时代的镜像表达。'
  },
  { 
    id: 6, 
    title: '贵阳喜来登大酒店', 
    category: '度假酒店', 
    img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200',
    designerView: '贵阳的喀斯特地貌赋予了我们灵感。在空间组织上，我们模仿了溶洞的流线与形态，创造了一系列富有张力的公共场域。这不仅是一家商务酒店，更是一个充满力量感的城市地理地标。'
  },

  { 
    id: 7, 
    title: '良瑜国际度假酒店', 
    category: '度假酒店', 
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200',
    designerView: '在良瑜项目中，我们探讨的是“森林叙事”的极致表达。建筑如同森林中的有机体，通过大量的木质格栅与自然采光，让室内空间与外部原始植被融为一体。这是一种关于“归隐”的商业实践，旨在为高净值人群提供一个避世的精神坐标。'
  },
  { 
    id: 8, 
    title: '豪生大酒店', 
    category: '度假酒店', 
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
    designerView: '豪生大酒店的设计核心在于“都市绿洲”的构建。我们试图在繁忙的城市轴线上，通过立体园林与开放式中庭的设计，制造一个静止的时间切片。这种对城市节奏的主动介入，赋予了商务社交更深层的人文温度。'
  },
  { 
    id: 9, 
    title: '兼葭乡居', 
    category: '精品民宿', 
    img: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200',
    designerView: '蒹葭苍苍，白露为霜。在水滨之畔，我们构建了一系列轻盈的漂浮建筑。利用水面的倒影拓展视觉边界，通过对木构艺术的极致表达，营造出一种超脱尘世的诗意生活。'
  },
];

const CaseArchives: React.FC = () => {
  const [activeTab, setActiveTab] = useState('全部');
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  const filteredCases = activeTab === '全部' 
    ? cases 
    : cases.filter(c => c.category === activeTab);

  return (
    <main className="bg-black pt-40 pb-24 px-6 md:px-12 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <span className="text-xs tracking-[0.5em] text-white/30 uppercase block">Archive Registry</span>
            <h1 className="text-5xl md:text-7xl font-serif-sc">
              案例档案馆
            </h1>
          </motion.div>
          
          <div className="flex flex-wrap gap-6 border-b border-white/10 pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-xs tracking-widest uppercase transition-all ${
                  activeTab === cat ? 'text-white border-b border-white' : 'text-white/40 hover:text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredCases.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedCase(item)}
                className="group relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
                  <span className="text-[10px] tracking-[0.4em] uppercase mb-4 opacity-60">{item.category}</span>
                  <h3 className="text-2xl font-serif-sc mb-6">{item.title}</h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <span className="text-[10px] tracking-widest">+</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Detail Overlay */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-12 py-12"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`case-${selectedCase.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-zinc-900 border border-white/10 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 z-20 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 aspect-square md:aspect-auto h-[40vh] md:h-auto overflow-hidden">
                <img src={selectedCase.img} alt={selectedCase.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between space-y-12">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-mono">
                      Project Archive / 0{selectedCase.id}
                    </span>
                    <div className="h-px w-12 bg-white/10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-light italic">{selectedCase.category}</span>
                    <h3 className="text-3xl md:text-5xl font-serif-sc tracking-widest">{selectedCase.title}</h3>
                  </div>

                  <div className="space-y-6 pt-4">
                    <h4 className="text-[10px] tracking-[0.4em] uppercase text-white/30 border-b border-white/5 pb-2">设计师视角 / Designer's Perspective</h4>
                    <p className="text-white/80 leading-relaxed text-lg font-light font-serif-sc italic">
                      “{selectedCase.designerView}”
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
                  <p className="text-[10px] tracking-widest text-white/20 uppercase">Building the civilization of future living.</p>
                  <button className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase group">
                    查看完整报告 <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Partners Section - Redesigned */}
      <section className="mt-40 bg-[#050505] py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-mono">Archive Registry / 02</span>
              <h2 className="text-4xl md:text-6xl font-serif-sc tracking-widest text-white/90 underline decoration-white/5 underline-offset-[16px]">合作品牌展示</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] tracking-[0.3em] text-white/30 uppercase max-w-xs leading-relaxed"
            >
              Building the future living system with global strategic partners.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '銀泰華爾道夫', '喜来登歐庭国際酒店', '豪生大酒店', '金陵酒店', 
              '金陽大酒店', '寧夏華祺國際飯店', '瑞祥國際大酒店', '寶難萬國酒店', 
              '索美麗雅酒店', '大足開元觀塘酒店', '開元名都大酒店', '西安高新酒店', 
              '恒旭大酒店', '麗柏酒店', '世纪精華心景酒店', '柏天酒店', 
              '寶柏精品酒店', '成都閱明酒店', '白雲新舍酒店', '雲澗酒店', 
              '林芝樾酒店', '重鏖半山子語酒店', '大理塵外酒店', '龍隅酒店', 
              '木原町酒店', '科力酒店', '喜都酒店', '奈思酒店', 
              '红璞酒店', '蒹葭鄉居', '大觀原點', '大觀·花海别墅酒店'
            ].map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.8 }}
                className="group relative h-24 flex items-center px-8 border border-white/[0.03] bg-gradient-to-r from-white/[0.01] to-transparent hover:from-white/[0.05] hover:border-white/10 transition-all duration-700 cursor-default overflow-hidden"
              >
                <div className="absolute left-0 w-[2px] h-0 bg-white/40 group-hover:h-full transition-all duration-700" />
                <div className="flex flex-col">
                  <span className="text-[12px] md:text-sm tracking-[0.1em] text-white/40 group-hover:text-white transition-colors duration-500 font-serif-sc">
                    {brand}
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-white/10 group-hover:text-white/30 transition-colors duration-500 uppercase mt-1">
                    Partner Entity / 0{i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12"
          >
            <div className="flex gap-2">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
               ))}
            </div>
            <p className="text-[11px] tracking-[0.4em] text-white/20 uppercase text-center md:text-right leading-loose">
              我们与全球顶尖品牌及创意机构深度协作，<br />
              在不同场域共同探索未来生活文明的边界。
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CaseArchives;
