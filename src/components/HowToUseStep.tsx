'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme } from './ThemeProvider';

interface HowToUseStepProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function HowToUseStep({ 
  number, 
  title, 
  description, 
  icon, 
  delay = 0 
}: HowToUseStepProps) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      className="flex gap-6 items-start"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-violet to-brand-orange flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <div className="text-brand-orange mb-2 text-2xl">{icon}</div>
        <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      </div>
    </motion.div>
  );
} 