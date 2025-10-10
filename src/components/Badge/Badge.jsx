import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text/Text";

import { Styles } from "./Badge.styles";

import { merge } from "lodash";

const DEFAULT_PROPS = {
  children: null,
  color: "primary.main",
  margin: "a-0",
  padding: "x-4 y-2",
  textProps: {
    color: "white.main",
    size: "captionSemibold",
  },
};

export const Badge = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  return (
    <Styles.Wrapper
      $color={attrs.color}
      $margin={attrs.margin}
      $padding={attrs.padding}
    >
      <Text {...attrs.textProps}>
        {attrs.children}
      </Text>
    </Styles.Wrapper>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  textProps: PropTypes.object,
};