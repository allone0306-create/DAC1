import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { reportData } from './ReportDetail';

const FutureLab: React.FC = () => {

  return (
    <main className="bg-[#0a0a0a] text-white pt-40 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.4em] text-white/40 uppercase"
            >
              Intelligence Platform
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-serif-sc mt-8 leading-tight"
            >
              未来研究院
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/40 mt-12 text-lg leading-relaxed max-w-sm"
            >
              通过对社会学、美学与商业趋势的交叉研究，我们为文旅行业提供具有前瞻性的思想补给。
            </motion.p>
          </div>
          
          <div className="lg:col-span-7 border-l border-white/10 pl-0 md:pl-16 space-y-12">
             {reportData.map((report, i) => (
               <Link 
                 key={report.id}
                 to={`/lab/${report.id}`}
                 className="block"
               >
                 <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group cursor-pointer py-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6"
                 >
                   <div>
                     <span className="text-[10px] tracking-widest text-white/30 font-mono mb-2 block">{report.year} / {report.category}</span>
                     <h3 className="text-xl font-serif-sc group-hover:text-white transition-colors text-white/80">{report.title}</h3>
                   </div>
                   <div className="text-[10px] tracking-widest uppercase border border-white/20 px-4 py-2 group-hover:bg-white group-hover:text-black transition-all self-start md:self-center">
                     Read Report
                   </div>
                 </motion.div>
               </Link>
             ))}
          </div>
        </div>

        <div className="bg-zinc-900/50 p-12 md:p-24 text-center space-y-8">
           <h2 className="text-3xl font-serif-sc italic">“数据是冷的，但生活是有温度的。”</h2>
           <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
             我们拒绝平庸的商业报告。这里的每一份研究都建立在对土地的真实热爱和对人性的深刻观察之上。
           </p>
        </div>
      </div>
    </main>
  );
};

export default FutureLab;
