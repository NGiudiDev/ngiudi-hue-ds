import React from "react";
import PropTypes from "prop-types";

import { ButtonSelector } from "./components/ButtonSelector";
import { Icon } from "../Icon/Icon";

import { Styles } from "./Button.styles";

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
  isLoading: false,
  kind: "filled",
  margin: "",
  onClick: null,
  type: "button",
};

export const Button = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <ButtonSelector
      disabled={attrs.disabled || attrs.isLoading}
      disclosure={attrs.disclosure}
      fullWidth={attrs.fullWidth}
      iconProps={attrs.iconProps}
      id={attrs.id}
      kind={attrs.kind}
      margin={attrs.margin}
      onClick={attrs.onClick}
      type={attrs.type}
    >
      {/* loading view */}
      <Styles.LoaderWrapper $isLoading={attrs.isLoading}>
        <Icon color="currentColor" name="spinner" size="minor" />
      </Styles.LoaderWrapper>

      {/* content view */}
      <Styles.ContentWrapper $isLoading={attrs.isLoading}>
        {attrs.iconProps.name && <Icon {...attrs.iconProps} />}

        {attrs.children}

        {attrs.disclosure && (
          <Icon color="currentColor" margin="l-8" name="downAngle" size="minor" />  
        )}
      </Styles.ContentWrapper>
    </ButtonSelector>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.any,
  disclosure: PropTypes.bool,
  fullWidth: PropTypes.bool,
  iconProps: Icon.propTypes,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  kind: PropTypes.oneOf(["filled", "outlined", "text"]),
  margin: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};