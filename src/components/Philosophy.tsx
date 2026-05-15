import React from 'react';
import { motion } from 'framer-motion';

const philosophies = [
  { title: '第二生活空间', desc: '在别处，重建生活的重心', img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800' },
  { title: '第三空间系统', desc: '介于家与远方之间的精神锚点', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800' },
  { title: '在地文化优先', desc: '挖掘每一寸土地独有的时间与灵魂', img: 'https://images.unsplash.com/photo-1525625230556-8e8adcaae75a?q=80&w=800' },
  { title: '自然疗愈', desc: '让空间成为人与自然握手言和的媒介', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800' },
  { title: '长期主义', desc: '拒绝快餐式设计，构建可持续的生命力', img: 'https://images.unsplash.com/photo-1505814534324-f13927697352?q=80&w=800' },
  { title: '精神栖居', desc: '给灵魂一个可以安放的角落', img: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800' }
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-serif-sc leading-tight mb-8">
            我们相信，<br />
            未来的人们旅行，不是为了住酒店，<br />
            而是为了重新生活。
          </h2>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {philosophies.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group cursor-default"
            >
              <div className="mb-6 overflow-hidden">
                <motion.div
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.8 }}
                   className="h-64 bg-zinc-900 overflow-hidden relative"
                >
                  <img 
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors" />
                </motion.div>
              </div>
              <h3 className="text-xl font-serif-sc mb-4 tracking-widest">{p.title}</h3>
              <p className="text-white/40 text-sm tracking-wide leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
