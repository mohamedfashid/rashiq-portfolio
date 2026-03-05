/**
 * Get image path with basePath for production
 * In development and Vercel, returns the path as-is.
 * On GitHub Pages, adds the basePath prefix.
 */
export const getImgPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // If no basePath or path already has it, return as-is
  if (!basePath || path.startsWith(basePath)) {
    return path;
  }

  // Add basePath prefix
  return `${basePath}${path}`;
};

/**
 * Get data file path with basePath for production
 * Used for fetching JSON data files
 */
export const getDataPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // If no basePath or path already has it, return as-is
  if (!basePath || path.startsWith(basePath)) {
    return path;
  }

  // Add basePath prefix
  return `${basePath}${path}`;
};