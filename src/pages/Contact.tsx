import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Left Side: Text & Manifesto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase block">Connect with DAC</span>
              <h1 className="text-5xl md:text-8xl font-serif-sc leading-none">
                联系我们
              </h1>
              <div className="w-12 h-px bg-white/20" />
              <p className="text-xl text-white/60 leading-relaxed font-light font-serif-sc italic">
                “场域，时间的容器，<br />
                生活，自然的回音”
              </p>
            </div>

            <div className="space-y-10 pt-8 border-t border-white/5">
              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase mb-2 group-hover:text-white/40 transition-colors">电话 / Phone</p>
                <p className="text-2xl md:text-3xl tracking-wider group-hover:translate-x-2 transition-transform duration-500">189 8399 8662</p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase mb-2 group-hover:text-white/40 transition-colors">邮箱 / Email</p>
                <p className="text-2xl md:text-3xl tracking-wider group-hover:translate-x-2 transition-transform duration-500 lowercase">allone0306@gmail.com</p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase mb-2 group-hover:text-white/40 transition-colors">地址 / Address</p>
                <p className="text-2xl md:text-3xl tracking-wider font-serif-sc group-hover:translate-x-2 transition-transform duration-500">中国 · 重庆 · 两江新区</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Matrix & QR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0a0a0a] border border-white/5 p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <Globe size={400} />
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-8 text-center group">
                  <div className="aspect-square bg-white p-6 relative overflow-hidden">
                    {/* QR Code Placeholder */}
                    <div className="w-full h-full border border-black/5 flex items-center justify-center bg-zinc-50 relative z-10">
                      <MessageSquare size={48} className="text-black/10" />
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif-sc mb-2 tracking-widest">官方微信</h4>
                    <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase">Scan to Connect</p>
                  </div>
                </div>

                <div className="space-y-8 text-center group">
                  <div className="aspect-square bg-white p-6 relative overflow-hidden">
                    {/* QR Code Placeholder */}
                    <div className="w-full h-full border border-black/5 flex items-center justify-center bg-zinc-50 relative z-10">
                      <MessageSquare size={48} className="text-black/10" />
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif-sc mb-2 tracking-widest">微信公众号</h4>
                    <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase">Scan to Follow</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
                <p className="text-[9px] tracking-[0.5em] text-white/20 uppercase">Digital Narrative Matrix</p>
                <div className="flex gap-4">
                   <div className="w-1 h-1 bg-white/20 rounded-full" />
                   <div className="w-1 h-1 bg-white/40 rounded-full" />
                   <div className="w-1 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
