import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Styles } from "../Panel.styles";

const DEFAULT_PROPS = {
  children: null,
  padding: "a-0",
  margin: "a-0",
};

export const PanelContent = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Content
      $margin={attrs.margin}
      $padding={attrs.padding}
    >
      {attrs.children}
    </Styles.Content>
  );
};

PanelContent.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};