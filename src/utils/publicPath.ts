/**
 * Utility for handling public assets with proper basePath consideration
 */

// Get the base URL for the environment (with trailing slash)
export function getBaseUrl(): string {
  // Check if we're on Netlify
  const isNetlify = process.env.NEXT_PUBLIC_IS_NETLIFY === 'true';
  
  if (typeof window !== 'undefined') {
    // Client-side: use window.location
    if (isNetlify) {
      return window.location.origin + '/';
    }
    
    const basePath = window.location.pathname.startsWith('/tonikiku-landing-page') 
      ? '/tonikiku-landing-page/' 
      : '/';
    return window.location.origin + basePath;
  }
  
  // Server-side: use environment
  if (isNetlify) {
    return '/';
  }
  
  return process.env.NODE_ENV === 'production' 
    ? 'https://joshuaunderwood.github.io/tonikiku-landing-page/' 
    : 'http://localhost:3000/';
}

// Get the public path for an asset
export function getPublicPath(path: string): string {
  // Remove leading slashes for consistency
  const cleanPath = path.replace(/^\/+/, '');
  
  // For absolute URLs, return as is
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath;
  }
  
  // Check if we're on Netlify - use relative paths
  if (process.env.NEXT_PUBLIC_IS_NETLIFY === 'true') {
    return cleanPath;
  }
  
  // Check if we're on Vercel
  const isVercel = process.env.NEXT_PUBLIC_VERCEL === '1' || process.env.VERCEL === '1';
  if (isVercel) {
    return `/${cleanPath}`;
  }
  
  // For development environment
  if (process.env.NODE_ENV !== 'production') {
    return `/${cleanPath}`;
  }
  
  // For public assets in production (GitHub Pages)
  const baseUrl = getBaseUrl();
  return `${baseUrl}${cleanPath}`;
} 