import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '在地文化', path: '/culture' },
    { name: '生活系统', path: '/living-system' },
    { name: '案例档案', path: '/cases' },
    { name: '未来研究', path: '/lab' },
    { name: '思想', path: '/thoughts' },
    { name: '创始人', path: '/founder' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-5">
          <div className="flex flex-col border-r border-white/20 pr-5 py-1">
            <span className="text-2xl md:text-3xl font-bold tracking-[0.1em] leading-none">DAC</span>
            <span className="text-[10px] md:text-[12px] font-serif-sc tracking-[0.25em] mt-2 whitespace-nowrap text-white/70">达成文化</span>
          </div>
          <div className="flex flex-col justify-between py-1">
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-light leading-tight opacity-40 uppercase">
              Design<br />
              Art<br />
              Culture
            </span>
            <span className="text-[9px] md:text-[10px] font-serif-sc tracking-[0.4em] text-white/30 whitespace-nowrap mt-2">
              达于心 <span className="opacity-20 text-[8px]">/</span> 成于行
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest hover:opacity-100 transition-opacity ${
                location.pathname === link.path ? 'opacity-100' : 'opacity-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 border border-white/20 hover:border-white/60 transition-colors text-xs tracking-widest"
          >
            联系我们
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif-sc tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-3 border border-white/20 text-sm tracking-widest"
            >
              加入我们
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
