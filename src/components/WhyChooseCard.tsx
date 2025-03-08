'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface WhyChooseCardProps {
  title: string;
  description: string;
  delay?: number;
}

export default function WhyChooseCard({ title, description, delay = 0 }: WhyChooseCardProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange to-brand-violet rounded-xl opacity-30 group-hover:opacity-100 blur-sm group-hover:blur transition duration-300"></div>
      
      <div className={`relative ${theme === 'dark' ? 'bg-black/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl p-6 h-full shadow-md`}>
        <h3 className="text-xl font-bold mb-3 text-gradient-violet-orange">{title}</h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      </div>
    </motion.div>
  );
} 