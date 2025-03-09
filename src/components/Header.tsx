'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? `${theme === 'dark' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md py-3 shadow-lg shadow-brand-violet/10` 
        : `${theme === 'dark' ? 'bg-transparent' : 'bg-white/50 backdrop-blur-sm'} py-4`
    }`}>
      <div className="container mx-auto flex justify-between items-center h-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-gradient-violet-orange">とに聞く</span>
          </Link>
        </motion.div>

        <div className="flex items-center gap-6">
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#features">特徴</NavLink>
            <NavLink href="#how-to-use">使い方</NavLink>
            <NavLink href="#why">なぜ選ぶ？</NavLink>
          </nav>

          {/* Theme toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Download button - desktop */}
          <div className="hidden md:block">
            <motion.a
              href="#download"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-violet to-brand-orange rounded-full opacity-70 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-300"></span>
              <span className={`relative rounded-full px-5 py-2 flex items-center gap-1.5 ${theme === 'dark' ? 'bg-black/90 text-white' : 'bg-white/90 text-gray-800'} font-semibold shadow-md`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
                ダウンロード
              </span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} focus:outline-none p-1`}
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-md`}
        >
          <div className="container mx-auto py-5 space-y-5">
            <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>特徴</MobileNavLink>
            <MobileNavLink href="#how-to-use" onClick={() => setIsMenuOpen(false)}>使い方</MobileNavLink>
            <MobileNavLink href="#why" onClick={() => setIsMenuOpen(false)}>なぜ選ぶ？</MobileNavLink>
            <MobileNavLink href="#download" onClick={() => setIsMenuOpen(false)} isButton>
              ダウンロード
            </MobileNavLink>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <motion.a
      href={href}
      className={`${theme === 'dark' ? 'text-white hover:text-brand-violet-light' : 'text-gray-800 hover:text-brand-violet'} transition-colors relative group py-2 font-medium`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-violet to-brand-orange group-hover:w-full transition-all duration-300"></span>
    </motion.a>
  );
}

function MobileNavLink({ 
  href, 
  onClick, 
  children, 
  isButton = false 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode;
  isButton?: boolean;
}) {
  const { theme } = useTheme();
  
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block ${
        isButton 
          ? 'relative px-5 py-3 rounded-full bg-gradient-to-r from-brand-violet to-brand-orange text-white font-semibold text-center flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-300' 
          : `${theme === 'dark' ? 'text-white hover:text-brand-violet-light' : 'text-gray-800 hover:text-brand-violet'} py-2 font-medium`
      }`}
    >
      {isButton && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
          />
        </svg>
      )}
      {children}
    </a>
  );
} 