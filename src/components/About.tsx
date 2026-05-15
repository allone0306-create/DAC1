import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="text-sm tracking-[0.3em] text-white/40 uppercase">Manifesto</span>
            <h2 className="text-4xl md:text-6xl font-serif-sc leading-tight">我们不是设计公司</h2>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-light">
            <p>
              DAC达成文化，<br />
              是一家以未来生活方式为核心的空间文化运营平台。
            </p>
            <p className="border-l-2 border-white/10 pl-8 space-y-4 italic">
              我们通过：<br />
              <span className="text-white block">在地文化、空间场域、艺术系统、</span>
              <span className="text-white block">文旅策划、长期运营陪跑，</span>
            </p>
            <p>
              帮助项目从“住宿空间”<br />
              进化为“生活系统”。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative aspect-[4/5] bg-zinc-900 overflow-hidden rounded-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop" 
            alt="Space concept" 
            className="w-full h-full object-cover grayscale opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <p className="text-xs tracking-widest text-white/40 uppercase">Creating Emotional Landscapes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
