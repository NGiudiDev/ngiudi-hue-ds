/**
 * Resolves color value from theme colors or returns the color as-is
 * @param {string} color - Color key from theme or direct color value
 * @returns {string} - Resolved color value
 */
export const getColorValue = (colors, color) => {
  if (!color) return colors.black.main;
  
  // Handle nested color objects (e.g., "black.main" or "primary.light")
  if (color.includes(".")) {
    const [colorFamily, variant] = color.split(".");
    return colors[colorFamily]?.[variant] || colors.black.main;
  }
  
  // Handle direct color family (e.g., "black", "primary")
  if (colors[color]) {
    return colors[color].main || colors[color];
  }

  return null;
};