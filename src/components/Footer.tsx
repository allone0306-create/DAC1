import React from 'react';
import { Mail, Phone, MapPin, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-5">
              <div className="flex flex-col border-r border-white/10 pr-5 py-1">
                <span className="text-2xl font-bold tracking-[0.1em] leading-none">DAC</span>
                <span className="text-[10px] font-serif-sc tracking-[0.25em] mt-2 whitespace-nowrap opacity-60">达成文化</span>
              </div>
              <div className="flex flex-col justify-between py-1">
                <span className="text-[9px] tracking-[0.3em] font-light leading-tight opacity-30 uppercase">
                  Design<br />
                  Art<br />
                  Culture
                </span>
                <span className="text-[9px] font-serif-sc tracking-[0.4em] text-white/20 whitespace-nowrap mt-2">
                  达于心 <span className="opacity-20 text-[8px]">/</span> 成于行
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-white/70 max-w-sm leading-relaxed text-sm">
                  我们不是在设计房子，而是在为人类寻找另一种可能的生活方式。让灵魂在自然与在地文化中，找到归处。
                </p>
                <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase leading-relaxed max-w-sm">
                  We are not merely designing structures; we are architecting the secondary systems of existence, where the soul finds resonance within nature and heritage.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex flex-col gap-2">
                <p className="text-[11px] font-serif-sc tracking-widest text-white/40 italic">
                  “场域，时间的容器，生活，自然的回音”
                </p>
                <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase">
                  A site is a vessel of time, living is the resonance of nature
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <Globe size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                <MessageSquare size={18} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-40">探索</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link to="/living-system" className="hover:text-white transition-colors">第二生活系统</Link></li>
              <li><Link to="/partnership" className="hover:text-white transition-colors">长期陪跑模式</Link></li>
              <li><Link to="/lab" className="hover:text-white transition-colors">未来研究院</Link></li>
              <li><Link to="/whitepaper" className="hover:text-white transition-colors">第二生活白皮书</Link></li>
              <li><Link to="/thoughts" className="hover:text-white transition-colors">思想与文章</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.3em] uppercase opacity-40">联络</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3"><Mail size={14} className="opacity-40" /> allone0306@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={14} className="opacity-40" /> 189 8399 8662</li>
              <li className="flex items-center gap-3"><MapPin size={14} className="opacity-40" /> 中国 · 重庆 · 两江新区</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-white/20 uppercase font-light">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© 2026 DAC DESIGN ART CULTURE. ALL RIGHTS RESERVED.</p>
            <span className="hidden md:block w-px h-3 bg-white/10" />
            <p className="tracking-[0.4em]">Architecting Future Living Systems</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
