import styled from "styled-components";

import { marginProperties } from "../../utils/spacing";
import { getColorValue } from "../../utils/colors";

const Divider = styled("hr")`
  border-color: ${(props) => getColorValue(props.theme.colors, props.$color)};
  border-width: 1px;

  ${(props) => marginProperties(props)};
`;

export const Styles = {
  Divider,
};