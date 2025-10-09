import styled from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";
import { getColorValue } from "../../utils/colors";

const Wrapper = styled("div")`
  align-items: center;
  background-color: ${(props) => getColorValue(props.theme.colors, props.$color)};
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  white-space: nowrap;

  ${(props) => marginProperties(props)}
  ${(props) => paddingProperties(props)}
`;

export const Styles = {
  Wrapper,
};