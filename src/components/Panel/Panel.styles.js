import { styled } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";

const Footer = styled("div")`
  margin-top: auto;
  width: 100%;
  
  ${(props) => paddingProperties(props)}
  ${(props) => marginProperties(props)}
`;

const Wrapper = styled("div")` 
  background-color: ${(props) => props.theme.colors.white.surface};

  border: ${(props) =>
    props.$borderless
      ? "none"
      : `1px solid ${props.theme.colors.black.border}`};
  
  border-radius: 4px;
  box-shadow: ${(props) => props.onClick && props.theme.shadows.level1};
  cursor: ${(props) => props.onClick ? "pointer" : "default"};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  
  ${(props) => props.$isFullHeight && `
    height: 100%;
  `}
  
  ${(props) => paddingProperties(props)}
  ${(props) => marginProperties(props)}
`;

export const Styles = {
  Footer,
  Wrapper
};