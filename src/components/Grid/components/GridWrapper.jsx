import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Styles } from "../Grid.styles";

const DEFAULT_PROPS = {
  children: null,
  margin: "a-0",
  padding: "a-0",
};

export const GridWrapper = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Wrapper
      $margin={attrs.margin}
      $padding={attrs.padding}
    >
      {attrs.children}
    </Styles.Wrapper>
  );
};

GridWrapper.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};