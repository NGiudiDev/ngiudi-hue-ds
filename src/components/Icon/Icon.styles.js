import styled, { css } from "styled-components";

import { marginProperties } from "../../utils/spacing";
import { getColorValue } from "../../utils/colors";

//? sizes declaration
const ICON_WRAPPER_SIZES = {
  minor: "20px",
  major: "24px",
  spot: "36px",
};

const ICON_SIZES = {
  minor: "16px",
  major: "20px",
  spot: "32px",
};

//? styles declaration
const IconItem = styled("svg")`
  height: ${props => ICON_SIZES[props.$size]};
  width: ${props => ICON_SIZES[props.$size]};
  fill: ${props => getColorValue(props.theme.colors, props.$color) || props.theme.colors.black.main};
  display: block;
`;

const IconWrapper = styled("div")`
  align-items: center;
  display: inline-flex;
  height: ${props => ICON_WRAPPER_SIZES[props.$size]};
  justify-content: center;
  width: ${props => ICON_WRAPPER_SIZES[props.$size]};
  cursor: ${props => props.onClick ? "pointer" : "default"};
  
  ${props => props.$spin && css`
    animation: ${props.theme.animations.spin} 1s linear infinite;
  `}
  
  ${props => marginProperties(props)}
`;

export const Styles = {
  IconItem,
  IconWrapper,
};