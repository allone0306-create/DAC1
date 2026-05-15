import React from 'react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <main className="bg-black text-white pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2 }}
          className="sticky top-40 aspect-[3/4] overflow-hidden bg-[#111]"
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
            alt="Founder 未山"
            className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-serif-sc">未山 / Wei Shan</span>
              <div className="w-12 h-px bg-white/20" />
              <span className="text-xs tracking-[0.4em] text-white/40 uppercase">Founder of DAC</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif-sc leading-tight italic">
              “人们不是在逃离城市，<br />
              而是在寻找真正的自我。”
            </h1>
          </motion.div>
          
          <div className="space-y-12 text-lg text-white/60 leading-relaxed font-light">
            <div className="py-10 border-y border-white/5 space-y-4">
              <p className="text-2xl md:text-3xl font-serif-sc tracking-[0.1em] text-white">
                “场域，时间的容器，生活，自然的回音”
              </p>
              <p className="text-xs tracking-[0.3em] text-white/30 uppercase">
                A site is a vessel of time, living is the resonance of nature
              </p>
            </div>

            <p>
              在创立达成文化之前，我们一直在思考：为什么现代人拥有了越来越多的空间，却感到越来越孤独？
            </p>
            <p>
              传统的房地产和文旅开发，往往关注的是物理载体的建设，而忽略了载体之内的“生命系统”。
              我们追求的不是华丽的吊灯或昂贵的大理石，而是清晨的第一缕光如何穿过竹林，
              是傍晚时分那一碗热茶带给人的安定感。
            </p>
            <p className="text-white text-xl">
              DAC的使命，就是为这些迷失在效率时代的灵魂，提供一套完整的“第二生活系统”。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div>
              <span className="text-xs tracking-widest text-white/30 uppercase mb-4 block">核心关怀</span>
              <p className="text-sm">人与自然的握手言和</p>
            </div>
            <div>
              <span className="text-xs tracking-widest text-white/30 uppercase mb-4 block">设计哲学</span>
              <p className="text-sm">克制的介入，深度的叙事</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Founder;
