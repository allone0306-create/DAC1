import React from 'react';
import { motion } from 'framer-motion';

const insights = [
  { label: '第二生活崛起', value: '85%', desc: '人们追求更高质量的非日常体验' },
  { label: '情绪消费', value: '72%', desc: '空间不再只是功能，而是情绪的容器' },
  { label: '疗愈经济', value: '2.4x', desc: '自然共生与精神栖居成为核心需求' },
  { label: '长住化趋势', value: '60%', desc: '从短期打卡转向深度旅居体验' }
];

const Insights: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-24"
        >
          <span className="text-xs tracking-[0.3em] text-black/40 uppercase mb-4 block">Industry Insights</span>
          <h2 className="text-4xl md:text-6xl font-serif-sc leading-tight mb-8">
            未来的文旅，<br />
            正在从空间消费转向生活消费。
          </h2>
          <div className="h-px w-24 bg-black/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {insights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-6 p-8 border border-black/5 hover:border-black/20 transition-all group"
            >
              <div className="text-xs tracking-widest text-black/40 uppercase font-medium">{item.label}</div>
              <div className="text-5xl font-serif-sc overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="block"
                >
                  {item.value}
                </motion.span>
              </div>
              <p className="text-sm text-black/60 leading-relaxed">{item.desc}</p>
              
              <div className="h-1 w-0 group-hover:w-full bg-black transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Background Element */}
        <div className="mt-32 relative h-[400px] w-full bg-zinc-50 overflow-hidden flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
             <div className="w-[600px] h-[600px] border border-black/5 rounded-full" />
             <div className="absolute w-[400px] h-[400px] border border-black/5 rounded-full" />
             <div className="absolute w-[800px] h-[800px] border border-black/5 rounded-full" />
          </motion.div>
          
          <div className="relative text-center px-4 max-w-2xl">
             <p className="text-lg md:text-2xl font-serif-sc italic opacity-80">
               “我们正处在从‘拥有’到‘存在’的转折点。”
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
