'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import OptimizedImage from './OptimizedImage';

interface ImageTabViewProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export default function ImageTabView({ 
  images, 
  className = "", 
  containerClassName = "",
  priority = false 
}: ImageTabViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className={`relative ${containerClassName}`}>
      <div 
        className={`relative overflow-hidden rounded-xl ${className}`}
        style={{ aspectRatio: images[0].width / images[0].height }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <OptimizedImage
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width}
              height={images[currentIndex].height}
              className="w-full h-full object-cover"
              priority={priority}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevImage}
          className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} flex items-center justify-center z-10 hover:${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'} transition-colors`}
          aria-label="Previous image"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke={theme === 'dark' ? 'white' : 'black'}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextImage}
          className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} flex items-center justify-center z-10 hover:${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'} transition-colors`}
          aria-label="Next image"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke={theme === 'dark' ? 'white' : 'black'}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? theme === 'dark' 
                    ? 'bg-brand-violet' 
                    : 'bg-brand-orange' 
                  : theme === 'dark' 
                    ? 'bg-gray-600/70' 
                    : 'bg-gray-300/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 