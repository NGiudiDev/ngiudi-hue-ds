import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Wrapper } from "./Box.styles";

const DEFAULT_PROPS = {
  children: null,
  margin: "a-0",
  padding: "a-0",
};

export const Box = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Wrapper $margin={attrs.margin} $padding={attrs.padding}>
      {attrs.children}
    </Wrapper>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};