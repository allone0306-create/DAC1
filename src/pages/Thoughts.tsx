import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articleData } from './ArticleDetail';

const Thoughts: React.FC = () => {
  return (
    <main className="bg-zinc-50 text-black pt-40 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4">
            <h1 className="text-6xl font-serif-sc mb-12 tracking-tight">思想与文章</h1>
            <p className="text-black/40 text-lg leading-relaxed mb-12">
              记录我们关于文旅、空间、哲学与未来生活方式的零碎思考与深度剖析。
            </p>
            <div className="space-y-4">
              {['文旅未来', '空间哲学', '在地文化', '精神消费'].map(tag => (
                <button key={tag} className="block text-xs tracking-widest uppercase hover:translate-x-2 transition-transform">
                  # {tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-24">
            {articleData.map((article, i) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/thoughts/${article.id}`}>
                  <span className="text-[10px] font-mono tracking-widest text-black/40 block mb-4">
                    {article.date} — {article.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif-sc group-hover:italic transition-all duration-500 mb-8">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-black/20 group-hover:w-24 transition-all duration-700" />
                    <span className="text-[10px] tracking-widest uppercase font-medium">Read More</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Thoughts;
