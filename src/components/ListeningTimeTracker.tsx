'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface ListeningTimeTrackerProps {
  goalMinutes?: number;
  animate?: boolean;
  animationDuration?: number;
}

export default function ListeningTimeTracker({
  goalMinutes = 15,
  animate = true,
  animationDuration = 10 // changed to 10 seconds
}: ListeningTimeTrackerProps) {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [displayNumber, setDisplayNumber] = useState(0);
  
  // Animation settings
  const radius = 85;
  const circumference = Math.PI * radius; // Semi-circle, so PI instead of 2*PI
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  useEffect(() => {
    if (animate) {
      const animateProgress = () => {
        const durationMs = animationDuration * 1000;
        const intervalMs = 50; // update every 50ms for smooth animation
        const steps = durationMs / intervalMs;
        const progressIncrement = 100 / steps;
        const valueIncrement = goalMinutes / steps;
        
        let currentStep = 0;
        
        const interval = setInterval(() => {
          currentStep++;
          
          if (currentStep <= steps) {
            setProgress(currentStep * progressIncrement);
            setDisplayNumber(Math.min(Math.floor(currentStep * valueIncrement), goalMinutes));
          } else {
            clearInterval(interval);
            // Reset and restart animation after a brief pause
            setTimeout(() => {
              setProgress(0);
              setDisplayNumber(0);
              animateProgress();
            }, 500);
          }
        }, intervalMs);
        
        return () => clearInterval(interval);
      };
      
      const cleanup = animateProgress();
      return cleanup;
    }
  }, [animate, animationDuration, goalMinutes]);
  
  return (
    <div className={`w-full max-w-xs mx-auto p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
      <h3 className={`text-center text-lg font-medium mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        今日のリスニング時間
      </h3>
      
      <div className="relative w-48 h-32 mx-auto mb-8">
        {/* Background semi-circle */}
        <svg className="w-full h-full" viewBox="0 0 200 120">
          <path
            d="M 100,100 m -85,0 a 85,85 0 1,1 170,0"
            fill="none"
            strokeWidth="12"
            className={`${theme === 'dark' ? 'stroke-gray-800' : 'stroke-gray-200'}`}
            strokeLinecap="round"
          />
          
          {/* Progress semi-circle */}
          <motion.path
            d="M 100,100 m -85,0 a 85,85 0 1,1 170,0"
            fill="none"
            strokeWidth="12"
            className="stroke-brand-orange"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
          
          {/* Center text */}
          <text
            x="100"
            y="80"
            textAnchor="middle"
            fontSize="60"
            fontWeight="bold"
            className={`${theme === 'dark' ? 'fill-white' : 'fill-gray-800'}`}
          >
            {displayNumber}
          </text>
        </svg>
        
        {/* Min and max values */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm">
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>0</span>
          <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{goalMinutes}</span>
        </div>
        
        {/* Goal text */}
        <div className="text-center mt-2 mb-4">
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            of {goalMinutes} min goal
          </span>
        </div>
      </div>
      
      {/* Additional padding area */}
      <div className="h-4"></div>
    </div>
  );
} 