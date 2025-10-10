import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Styles } from "../Panel.styles";

const DEFAULT_PROPS = {
  borderless: false,
  children: null,
  isFullHeight: false,
  margin: "a-0",
  onClick: null,
  padding: "a-16",
};

export const PanelWrapper = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Wrapper
      $borderless={attrs.borderless}
      $isFullHeight={attrs.isFullHeight}
      $margin={attrs.margin}
      onClick={attrs.onClick}
      $padding={attrs.padding}
    >
      {attrs.children}
    </Styles.Wrapper>
  );
};

PanelWrapper.propTypes = {
  borderless: PropTypes.bool,
  children: PropTypes.node,
  isFullHeight: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  padding: PropTypes.string,
};