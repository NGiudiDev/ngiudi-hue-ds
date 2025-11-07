import React from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

import { Styles } from "./IconButton.styles";

import { merge } from "lodash";

const DEFAULT_PROPS = {
  color: "primary",
  count: 0,
  disabled: false,
  icon: {
    name: "home",
    size: "major",
  },
  id: null,
  margin: "a-0",
  onClick: () => {},
  type: "button",
};

const ICON_COLORS = {
  black: "white.main",
  primary: "primary.main",
  white: "black.main",
};

export const IconButton = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props, {
    icon: {
      color: ICON_COLORS[props.color || DEFAULT_PROPS.color],
    },
  });

  return (
    <Styles.IconButton
      $color={attrs.color}
      disabled={attrs.disabled}
      id={attrs.id}
      $margin={attrs.margin}
      onClick={attrs.onClick}
      type={attrs.type}
    >
      {attrs.count > 0 && (
				<Styles.Count>
					<Text align="center" color="white" type="captionRegular">
						{attrs.count > 9 ? "+9" : attrs.count}
					</Text>
				</Styles.Count>
			)}

      <Icon {...attrs.icon} />
    </Styles.IconButton>
  );
};

IconButton.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
  count: PropTypes.number,
  disabled: PropTypes.bool,
  icon: Icon.propTypes,
  id: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
};