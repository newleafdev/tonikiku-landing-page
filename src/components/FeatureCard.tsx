'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-violet to-brand-orange rounded-xl opacity-30 group-hover:opacity-100 blur-sm group-hover:blur transition duration-300"></div>
      
      <div className={`relative ${theme === 'dark' ? 'bg-black/80' : 'bg-white/90'} backdrop-blur-sm rounded-xl p-6 h-full shadow-md`}>
        <div className="flex flex-col h-full">
          <div className="text-brand-violet mb-4 text-3xl">{icon}</div>
          <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} flex-grow`}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
} 