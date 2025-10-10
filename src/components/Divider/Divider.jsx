import React from "react";
import { PropTypes } from "prop-types";

import { merge } from "lodash";

import { Styles } from "./Divider.styles";

const DEFAULT_PROPS = {
  color: "black.surface",
  margin: "a-0",
};

export const Divider = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Divider 
      $color={attrs.color}
      $margin={attrs.margin}
    />
  );
};

Divider.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
};