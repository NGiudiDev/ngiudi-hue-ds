import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Styles } from "./Text.styles";

import { typography } from "../../theme/typography";

const DEFAULT_PROPS = {
  align: "start",
  as: "p",
  color: "black",
  decoration: "none",
  htmlFor: "",
  margin: "a-0",
  padding: "a-0",
  type: "bodyRegular",
};

export const Text = (props) => {
  const attrs = {...DEFAULT_PROPS, ...props };

  // Validate typography type exists
  if (!typography[attrs.type]) {
    console.warn(`Typography type "${attrs.type}" not found. Using default "bodyRegular".`);
    attrs.type = "bodyRegular";
  }

  // Memoize text options to prevent unnecessary re-renders
  const textOptions = useMemo(() => ({
    $align: attrs.align,
    children: attrs.children,
    $color: attrs.color,
    $decoration: attrs.decoration,
    $margin: attrs.margin,
    $padding: attrs.padding,
    $type: attrs.type,
  }), [attrs.align, attrs.children, attrs.color, attrs.decoration, attrs.margin, attrs.padding, attrs.type]);

  // Additional props for label elements
  const labelProps = attrs.as === "label" ? { htmlFor: attrs.htmlFor } : {};

  // Render appropriate wrapper based on element type
  if (attrs.as === "label") {
    return (
      <Styles.LabelWrapper {...labelProps} {...textOptions} />
    );
  }

  return (
    <Styles.TextWrapper as={attrs.as} {...textOptions} />
  );
};

Text.propTypes = {
  align: PropTypes.oneOf(["start", "center", "end"]),
  as: PropTypes.oneOf(["p", "span", "label", "h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  decoration: PropTypes.oneOf(["none", "underline", "line-through"]),
  htmlFor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(typography)),
};