import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Styles } from "../Grid.styles";

const DEFAULT_PROPS = {
  align: "left",
  children: null,
  padding: "a-0",
  xs: 12,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

export const GridItem = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Item
      $align={attrs.align}
      $padding={attrs.padding}
      $xs={attrs.xs}
      $sm={attrs.sm}
      $md={attrs.md}
      $lg={attrs.lg}
      $xl={attrs.xl}
    >
      {attrs.children}
    </Styles.Item>
  );
};

GridItem.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  children: PropTypes.node,
  paddding: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
};