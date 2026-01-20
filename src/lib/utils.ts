export const basePath = process.env.NODE_ENV === 'production' ? '/renewhairlosscenter' : ''

export function getImagePath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
