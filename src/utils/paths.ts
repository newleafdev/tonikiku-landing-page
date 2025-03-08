// Utility function to handle paths correctly for both local development and production
export function getBasePath() {
  // Check if we're on Netlify
  const isNetlify = process.env.NEXT_PUBLIC_IS_NETLIFY === 'true';
  
  // On Netlify, don't use a base path
  if (isNetlify) {
    return '';
  }
  
  // Check if we're on Vercel (production)
  const isVercel = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_VERCEL === '1';
  if (isVercel) {
    return '';  // No base path needed for Vercel
  }
  
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  return process.env.NODE_ENV === 'production' ? '/tonikiku-landing-page' : '';
}

// Helper function to correctly prefix asset paths
export function assetPath(path: string) {
  const basePath = getBasePath();
  
  // Remove any leading slash for consistency
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're on Vercel
  const isVercel = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_VERCEL === '1';
  if (isVercel) {
    return `/${cleanPath}`;  // Simple path for Vercel
  }
  
  // If the path already includes the base path, return it as is
  if (basePath && path.startsWith(basePath)) {
    return path;
  }
  
  // For Netlify, we need relative paths without a leading slash
  if (process.env.NEXT_PUBLIC_IS_NETLIFY === 'true') {
    return cleanPath;
  }
  
  // Combine base path with the clean path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
} 