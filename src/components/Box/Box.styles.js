import styled, { css } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";

export const Wrapper = styled("div")`
  ${(props) => css`
    ${marginProperties(props)}
    ${paddingProperties(props)}
  `}
`;