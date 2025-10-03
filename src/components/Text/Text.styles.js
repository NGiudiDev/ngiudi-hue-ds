import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";
import { typography } from "../../theme/typography";
import { colors } from "../../theme/colors";

/**
 * Resolves color value from theme colors or returns the color as-is
 * @param {string} color - Color key from theme or direct color value
 * @returns {string} - Resolved color value
 */
const getColorValue = (color) => {
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
  
  // Return as-is for custom colors (e.g., "#ffffff", "red")
  return color;
};

/**
 * Common text styles applied to both TextWrapper and LabelWrapper
 */
const textStyles = (props) => {
  const typographyVariant = typography[props.$type] || typography.bodyRegular;
  
  return css`
    color: ${getColorValue(props.$color)};
    font-family: "Source Sans 3", sans-serif;
    font-size: ${typographyVariant.size};
    font-weight: ${typographyVariant.weight};
    line-height: ${typographyVariant.lineHeight};
    text-align: ${props.$align};
    text-decoration: ${props.$decoration === "none" ? "none" : props.$decoration};
    margin: 0;
    padding: 0;
    
    ${marginProperties(props)}
    ${paddingProperties(props)}
    
    /* Improve text rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    
    /* Handle long text gracefully */
    word-wrap: break-word;
    overflow-wrap: break-word;
  `;
};

const TextWrapper = styled("p")`
  ${(props) => css`
    ${textStyles(props)}
  `}
`;

const LabelWrapper = styled("label")`
  ${(props) => css`
    display: inline-block;
    cursor: pointer;
    user-select: none;
    
    /* Improve accessibility */
    &:focus-visible {
      outline: 2px solid ${colors.highlight.main};
      outline-offset: 2px;
      border-radius: 2px;
    }
    
    /* Hover state for better UX */
    &:hover {
      opacity: 0.8;
    }
    
    ${textStyles(props)}
  `}
`;

export const Styles = {
  LabelWrapper,
  TextWrapper,
};