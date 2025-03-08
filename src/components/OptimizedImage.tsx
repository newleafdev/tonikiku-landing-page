'use client';

import Image, { ImageProps } from 'next/image';
import { getPublicPath } from '@/utils/publicPath';
import { useState, useEffect } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
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
      // Only process paths that are relative and in the public folder
      if (src.startsWith('/') && !src.startsWith('http')) {
        // Check if we're on Vercel
        const isVercel = process.env.NEXT_PUBLIC_VERCEL === '1';
        if (isVercel) {
          // For Vercel, we can just use the path as is
          setImageSrc(src);
        } else {
          // For other environments, use the publicPath utility
          setImageSrc(getPublicPath(src));
        }
      }
    }
  }, [src]);
  
  return (
    <Image
      src={imageSrc}
      alt={alt || "Image"}
      {...props}
      unoptimized={true} // Important for static export
    />
  );
} 