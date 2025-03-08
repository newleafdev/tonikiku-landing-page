'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';

interface WeeklyListeningChartProps {
  animationDuration?: number;
}

export default function WeeklyListeningChart({
  animationDuration = 10
}: WeeklyListeningChartProps) {
  const { theme } = useTheme();
  const [barValues, setBarValues] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [activeBarIndex, setActiveBarIndex] = useState<number>(0);
  const [isResetting, setIsResetting] = useState(false);
  const targetValuesRef = useRef<number[]>([]);
  const progressRef = useRef<number[]>([0, 0, 0, 0, 0, 0, 0]);
  
  // Days of the week
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
  // Maximum value and interval settings
  const maxValue = 15;
  const intervalValue = 5;
  const intervals = Array.from({ length: Math.floor(maxValue / intervalValue) + 1 }, (_, i) => maxValue - (i * intervalValue));

  // Generate random data between 2 and 15 minutes
  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 14) + 2);
  };
  
  useEffect(() => {
    let isMounted = true;
    let animationFrame: number;
    
    const runAnimation = () => {
      const newTargetValues = generateRandomData();
      targetValuesRef.current = newTargetValues;
      setBarValues(newTargetValues);
      
      progressRef.current = [0, 0, 0, 0, 0, 0, 0];
      setActiveBarIndex(0);
      setIsResetting(false);
      
      let currentBarIndex = 0;
      let startTime = performance.now();
      const barDuration = (animationDuration * 1000) / 7;
      
      const animate = (currentTime: number) => {
        if (!isMounted) return;
        
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / barDuration);
        
        progressRef.current[currentBarIndex] = progress;
        setBarValues([...targetValuesRef.current.map((target, idx) => 
          idx <= currentBarIndex ? target * (idx === currentBarIndex ? progress : 1) : 0
        )]);
        
        if (progress >= 1) {
          if (currentBarIndex < days.length - 1) {
            currentBarIndex++;
            setActiveBarIndex(currentBarIndex);
            startTime = currentTime;
          } else {
            setTimeout(() => {
              if (isMounted) {
                setIsResetting(true);
                setTimeout(() => {
                  if (isMounted) {
                    runAnimation();
                  }
                }, 200);
              }
            }, 1000);
            return;
          }
        }
        
        animationFrame = requestAnimationFrame(animate);
      };
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    runAnimation();
    
    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrame);
    };
  }, [animationDuration]);
  
  return (
    <div className={`w-full max-w-sm mx-auto p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
      <h3 className={`text-center text-lg font-medium mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        過去七日間のリスニング時間
      </h3>
      
      <div className="relative h-48 mb-6">
        {/* Y-axis labels only (no grid lines) */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {intervals.map((value, i) => (
            <div key={i} className="relative w-full">
              {/* Y-axis label */}
              <span 
                className={`absolute left-0 transform -translate-y-1/2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                style={{ top: `${(i * intervalValue / maxValue) * 100}%` }}
              >
                {value}m
              </span>
            </div>
          ))}
        </div>
        
        {/* Chart area with bars */}
        <div className="absolute inset-0 flex items-stretch px-8">
          <div className="flex-1 flex justify-between">
            {days.map((day, index) => (
              <div key={index} className="flex flex-col justify-end items-center">
                <motion.div 
                  className="w-[20px]"
                  style={{
                    height: `${(barValues[index] / maxValue) * 100}%`,
                    backgroundColor: index === activeBarIndex ? '#a855f7' : 
                                  index < activeBarIndex ? '#9333ea' : '#9ca3af',
                    borderRadius: '4px 4px 0 0',
                    boxShadow: index === activeBarIndex ? '0 0 8px rgba(168, 85, 247, 0.5)' : 
                              index < activeBarIndex ? '0 0 4px rgba(147, 51, 234, 0.3)' : 'none',
                    opacity: isResetting ? 0 : 1,
                    transition: isResetting ? 'opacity 0.2s' : 'none'
                  }}
                />
                
                {/* X-axis label directly beneath each bar */}
                <div 
                  className={`mt-2 text-xs ${
                    index === activeBarIndex ? 'font-bold text-purple-500' : 
                    index < activeBarIndex ? 'font-medium text-purple-700' : 
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 