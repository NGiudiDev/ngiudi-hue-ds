import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Styles } from "./Link.styles";

const DEFAULT_PROPS = {
  children: null,
  href: null,
  openInNewTab: false,
  type: "bodyRegular",
};

export const Link = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.LinkContainer 
      href={attrs.href}
      target={attrs.openInNewTab ? "_blank" : undefined}
      rel={attrs.openInNewTab ? "noopener noreferrer" : undefined}
      $type={attrs.type}
    >
      {attrs.children}
    </Styles.LinkContainer>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  type: PropTypes.string,
};