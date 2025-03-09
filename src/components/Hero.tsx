'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import ImageTabView from './ImageTabView';
import { assetPath } from '@/utils/paths';

export default function Hero() {
  const { theme } = useTheme();
  
  const heroImages = [
    {
      src: assetPath("/images/ss1.jpeg"),
      alt: "とに聞くアプリのスクリーンショット 1",
      width: 240,
      height: 480
    },
    {
      src: assetPath("/images/ss2.jpeg"),
      alt: "とに聞くアプリのスクリーンショット 2",
      width: 240,
      height: 480
    },
    {
      src: assetPath("/images/ss3.jpeg"),
      alt: "とに聞くアプリのスクリーンショット 3",
      width: 240,
      height: 480
    }
  ];
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-violet/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-orange/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>英語を聞き流しならこれ！</span>
              <br />
              <span className="text-gradient-violet-orange">「とにかく聞いてね」</span>
            </h1>
            <h2 className={`text-2xl md:text-3xl font-medium mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              読んで聞いて、自然に学ぶ
            </h2>
            <p className={`text-lg mb-8 max-w-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              英語の勉強、つまんない授業やドリルばっかりで飽きちゃった？「とにかく聞いてね」なら、楽しくて自然な方法で英語を学べるよ！
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#download"
                className="px-8 py-3 rounded-full relative overflow-hidden text-white font-medium text-lg text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-brand-violet/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(138, 43, 226, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(to right, var(--brand-violet), var(--brand-orange))"
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
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
                今すぐダウンロード
              </motion.a>
              <motion.a
                href="#features"
                className={`px-8 py-3 rounded-full border border-brand-violet ${theme === 'dark' ? 'text-white' : 'text-gray-800'} font-medium text-lg text-center hover:bg-brand-violet/10 transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                詳細を見る
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className={`relative w-[240px] h-[480px] ${theme === 'dark' ? 'bg-black border-gray-800' : 'bg-gray-100 border-gray-300'} rounded-[40px] border-4 overflow-hidden shadow-2xl`}>
              <div className={`absolute top-0 left-0 right-0 h-6 ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} rounded-t-[30px] flex justify-center items-end pb-1 z-10`}>
                <div className={`w-20 h-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} rounded-full`}></div>
              </div>
              <div className="w-full h-full flex items-center justify-center pt-4">
                <ImageTabView 
                  images={heroImages} 
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 