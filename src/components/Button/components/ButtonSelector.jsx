import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../../Icon/Icon";

import { Styles } from "../Button.styles";
import { merge } from "lodash";

const DEFAULT_PROPS = {
  children: null,
  disabled: false,
  disclosure: false,
  fullWidth: false,
  iconProps: {
    color: "currentColor",
    margin: "r-8",
    name: "",
    size: "minor",
  },
  id: null,
  kind: "filled",
  margin: "",
  onClick: null,
  type: "button",
};

export const ButtonSelector = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  switch (attrs.kind) {
    case "outlined":
      return (
        <Styles.OutlinedButton
          disabled={attrs.disabled}
          $disclosure={attrs.disclosure}
          $fullWidth={attrs.fullWidth}
          $iconProps={attrs.iconProps}
          id={attrs.id}
          $margin={attrs.margin}
          onClick={attrs.onClick}
          type={attrs.type}
        >
          {attrs.children}
        </Styles.OutlinedButton>
      );
    
    case "text":
      return (
        <Styles.TextButton
          disabled={attrs.disabled}
          $disclosure={attrs.disclosure}
          $fullWidth={attrs.fullWidth}
          $iconProps={attrs.iconProps}
          id={attrs.id}
          $margin={attrs.margin}
          onClick={attrs.onClick}
          type={attrs.type}
        >
          {attrs.children}
        </Styles.TextButton>
      );

    case "filled":
    default:
      return (
        <Styles.FilledButton
          disabled={attrs.disabled}
          $disclosure={attrs.disclosure}
          $fullWidth={attrs.fullWidth}
          $iconProps={attrs.iconProps}
          id={attrs.id}
          $margin={attrs.margin}
          onClick={attrs.onClick}
          type={attrs.type}
        >
          {attrs.children}
        </Styles.FilledButton>
      );
  }
};

ButtonSelector.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.any,
  disclosure: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconProps: Icon.propTypes,
  id: PropTypes.string,
  kind: PropTypes.oneOf(["filled", "outlined", "text"]),
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};