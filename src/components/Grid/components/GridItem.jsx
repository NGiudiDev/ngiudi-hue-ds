import React from "react";
import PropTypes from "prop-types";

import { Styles } from "../Grid.styles";

const DEFAULT_PROPS = {
  children: null,
  xs: 12,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

export const GridItem = (props) => {
  const attrs = { ...DEFAULT_PROPS, ...props };

  return (
    <Styles.Item
      xs={attrs.xs}
      sm={attrs.sm}
      md={attrs.md}
      lg={attrs.lg}
      xl={attrs.xl}
    >
      {attrs.children}
    </Styles.Item>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["auto"])]),
};