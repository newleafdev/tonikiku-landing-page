'use client';

import Image from 'next/image';
import { getPublicPath } from '@/utils/publicPath';
import { useState, useEffect } from 'react';

interface OptimizedImageProps extends Omit<React.ComponentProps<typeof Image>, 'src'> {
  src: string;
}

/**
 * A component that wraps next/image with proper path handling for GitHub Pages
 */
export default function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  
  useEffect(() => {
    // On client side, use the publicPath utility
    if (typeof window !== 'undefined') {
      // Skip processing for URLs that are already absolute
      if (!src.startsWith('http://') && !src.startsWith('https://')) {
        setImageSrc(getPublicPath(src));
      }
    }
  }, [src]);
  
  // Handle static exports with unoptimized flag
  return (
    <Image
      src={imageSrc}
      alt={alt || "Image"}
      {...props}
      unoptimized={true} // Important for static export
    />
  );
} 