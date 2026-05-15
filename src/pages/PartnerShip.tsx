import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Users, Zap, Calendar, Award } from 'lucide-react';

const PartnerShip: React.FC = () => {
  const steps = [
    { title: '在地文化转译', desc: '深度调研土地内核，构建独特的精神IP系统。', icon: <Users className="w-6 h-6" /> },
    { title: '空间场域构建', desc: '以生活方式为导向，打造具备情绪溢价的物理空间。', icon: <Zap className="w-6 h-6" /> },
    { title: '内容运营导入', desc: '植入持续生长的生活内容，建立社群粘性。', icon: <Calendar className="w-6 h-6" /> },
    { title: '长期资产增值', desc: '通过持续优化与品牌溢价，实现资产的长期稳健增长。', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-xs tracking-[0.4em] text-white/40 uppercase">Co-Creation Model</span>
            <h1 className="text-5xl md:text-7xl font-serif-sc leading-tight">
              长期陪跑：<br />
              一种新型的<br />
              <span className="italic">商业文明</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed font-light max-w-lg">
              我们拒绝一次性设计的博弈，追求长期运营的共赢。DAC 陪跑模式是将我们的专业能力转化为项目持续增长的底层逻辑。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900/50 p-12 border border-white/10 flex flex-col justify-center"
          >
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center font-bold text-xl">7</div>
                <div>
                  <h3 className="text-2xl font-serif-sc mb-2">七折进场</h3>
                  <p className="text-white/40 text-sm">大幅降低业主初期的专业咨询与设计门槛，体现我们对项目的长期信心。</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center font-bold text-xl">%</div>
                <div>
                  <h3 className="text-2xl font-serif-sc mb-2">营业额分成</h3>
                  <p className="text-white/40 text-sm">我们将收益与项目的经营结果直接挂钩，成为真正的利益共同体。</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="mb-40">
          <h2 className="text-3xl font-serif-sc text-center mb-24">陪跑模式的四大支柱</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
              >
                <div className="mb-8 text-white/40 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h4 className="text-xl font-serif-sc mb-4">{step.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Section (Detailed) */}
        <div className="bg-white text-black p-12 md:p-24 mb-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif-sc mb-16 text-center">为什么选择长期陪跑？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-[10px] tracking-[0.4em] uppercase opacity-40">传统模式 / Fragmentation</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm opacity-60">✕ 设计与运营脱节，好看不好用</li>
                  <li className="flex items-center gap-3 text-sm opacity-60">✕ 交付即终结，无人对增长负责</li>
                  <li className="flex items-center gap-3 text-sm opacity-60">✕ 内容老化快，缺乏二次消费动力</li>
                </ul>
              </div>
              <div className="space-y-8">
                <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold">DAC 模式 / Symbiosis</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-black" /> 全生命周期参与，设计服务于运营</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-black" /> 利益绑定，专家团队持续在线</li>
                  <li className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-black" /> 内容季度更新，保持场域鲜活度</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-24 border-t border-white/10">
          <TrendingUp className="mx-auto mb-8 opacity-20 w-16 h-16" />
          <h2 className="text-3xl md:text-5xl font-serif-sc mb-12">开启您的第二生活系统构建</h2>
          <Link 
            to="/join" 
            className="inline-block px-12 py-4 bg-white text-black text-sm tracking-[0.3em] uppercase hover:bg-zinc-200 transition-all"
          >
            申请合作洽谈
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PartnerShip;
