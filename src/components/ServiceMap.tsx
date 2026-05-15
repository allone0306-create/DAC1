import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const services = [
  { 
    id: 'A', 
    title: '在地文化研究', 
    desc: '地域精神内核的挖掘与IP转化',
    detail: '深入土地的微观生活史，通过田野调查、县志考究与非遗访谈，建立地域文化基因库。我们将破碎的文化符号转译为具备商业溢价的精神资产，为项目注入独一无二的灵魂内核。'
  },
  { 
    id: 'B', 
    title: '文旅策划规划', 
    desc: '以生活方式为导向的顶层设计',
    detail: '拒绝同质化的开发逻辑。我们从未来的生活需求出发，进行顶层战略设计与产品业态规划。通过对人流、物流与情绪流的精密推演，构建具备自生长能力的文旅场域系统。'
  },
  { 
    id: 'C', 
    title: '空间场域设计', 
    desc: '构建具有情绪感染力的建筑空间',
    detail: '建筑是情绪的容器。我们关注光影的流转、材料的触感与空间的开合，通过克制而精准的介入，让物理空间产生情感共鸣。从建筑方案到室内陈设，实现全维度的叙事表达。'
  },
  { 
    id: 'D', 
    title: '艺术软装系统', 
    desc: '艺术介入生活系统的完整叙事',
    detail: '艺术不是点缀，而是空间的灵魂。我们通过艺术品的系统化策划与陈设，在日常场景中构建艺术化的生活触点。让艺术回归生活，让居住成为一场永不落幕的感官实验。'
  },
  { 
    id: 'E', 
    title: '品牌视觉系统', 
    desc: '数字化时代的审美表达与连接',
    detail: '基于互联网传播逻辑与当代审美高度，构建完整的视觉识别系统。从Logo设计到数字化界面，我们为项目建立一套具备强识别性与美学认同感的品牌语言。'
  },
  { 
    id: 'F', 
    title: '内容运营系统', 
    desc: '构建人与空间发生连接的活动机制',
    detail: '空间交付仅是开始，内容的持续生长才是核心。我们通过策划高品质的艺术展览、文化沙龙与生活方式活动，建立紧密的社群粘性，让空间成为活性的能量中心。'
  },
  { 
    id: 'G', 
    title: '长期运营陪跑', 
    desc: '专业团队持续在场的资产增值',
    detail: '以利益共同体模式深度介入项目运营。通过持续的数据优化、内容迭代与专业团队陪跑，确保项目资产的长期溢价与品牌生命力的持续生长。'
  },
  { 
    id: 'H', 
    title: '未来生活系统', 
    desc: '构建完整的、可持续生长的第二人生',
    detail: '定义未来旅居的新标准。我们将文化、艺术、健康与社群高度整合，构建一套完整的“第二生活”配套体系。为现代精英阶层提供一套可以脱离城市压力的精神栖居系统。'
  }
];

const ServiceMap: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 block">Service Matrix</span>
            <h2 className="text-4xl md:text-5xl font-serif-sc leading-tight">
              完整服务体系：<br />
              从研究到运营的全链条闭环。
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm max-w-xs mb-2"
          >
            我们构建的不仅仅是物理空间，更是涵盖文化、艺术、运营在内的完整生命系统。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              onClick={() => setActiveService(index)}
              className="bg-black p-10 h-72 flex flex-col justify-between group cursor-pointer relative"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-widest text-white/40 font-mono">0{index + 1} / {service.id}</span>
                <div 
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
                >
                  <span className="text-[10px]">+</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-serif-sc mb-3 tracking-widest group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Overlay */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`service-${activeService}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-white/10 p-8 md:p-16 max-w-2xl w-full relative z-10"
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.4em] text-white/30 uppercase font-mono">
                    System / 0{activeService + 1}
                  </span>
                  <div className="h-px w-12 bg-white/10" />
                </div>

                <h3 className="text-3xl md:text-5xl font-serif-sc tracking-widest">
                  {services[activeService].title}
                </h3>

                <p className="text-xl text-white/80 leading-relaxed font-light font-serif-sc italic">
                  “{services[activeService].desc}”
                </p>

                <div className="h-px w-full bg-white/5" />

                <p className="text-white/50 leading-relaxed text-lg font-light">
                  {services[activeService].detail}
                </p>

                <div className="pt-8 flex justify-end">
                  <button 
                    onClick={() => setActiveService(null)}
                    className="text-[10px] tracking-[0.4em] uppercase border border-white/10 px-8 py-3 hover:bg-white hover:text-black transition-all"
                  >
                    Close Discovery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceMap;
