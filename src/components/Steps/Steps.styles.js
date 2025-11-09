import { styled } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";

const Wrapper = styled("div")((props) => `
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: ${props.maxWidth};
  
  ${(props) => marginProperties(props)}
  ${(props) => paddingProperties(props)}
`);

const Line = styled("div")((props) => `
  background-color: ${props.theme.colors.black.surface};
  flex-grow: 1;
  height: 1px;
  margin: 0px 8px;
`);

export const Styles = {
  Wrapper,
  Line,
};