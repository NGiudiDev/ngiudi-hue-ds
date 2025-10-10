import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Styles } from "../Panel.styles";

const DEFAULT_PROPS = {
  children: null,
  padding: "a-0",
  margin: "a-0",
};

export const PanelFooter = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Footer
      $margin={attrs.margin}
      $padding={attrs.padding}
    >
      {attrs.children}
    </Styles.Footer>
  );
};

PanelFooter.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};