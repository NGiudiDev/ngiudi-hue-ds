import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";
import { getColorValue } from "../../utils/colors";

/**
 * Common text styles applied to both TextWrapper and LabelWrapper
 */
const textStyles = (props) => {
  const typographyVariant = props.theme.typography[props.$type] || props.theme.typography.bodyRegular;
  
  return css`
    color: ${getColorValue(props.theme.colors, props.$color) || props.theme.colors.black.main};
    font-family: Public Sans, sans-serif;
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
      outline: 2px solid ${props.theme.colors.highlight.main};
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