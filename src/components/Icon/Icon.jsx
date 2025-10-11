import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { Styles } from "./Icon.styles";

import { icons } from "../../theme/icons";

const DEFAULT_PROPS = {
  color: "black.main",
  margin: "a-0",
  name: "home",
  onClick: null,
  size: "major",
  spin: false,
};

export const Icon = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  // Retrieve the icon data
  const iconData = icons[attrs.name];
  
  if (!iconData) { 
    console.warn(`Icon "${attrs.name}" not found`);
    return null;
  }

  return (
    <Styles.IconWrapper
      $margin={attrs.margin}
      onClick={attrs.onClick}
      $size={attrs.size}
      $spin={attrs.spin}
    >
      <Styles.IconItem
        $color={attrs.color}
        $size={attrs.size}
        viewBox={iconData.viewBox}
      >
        <path d={iconData.path} />
      </Styles.IconItem>
    </Styles.IconWrapper>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["minor", "major", "spot"]),
  spin: PropTypes.bool,
};