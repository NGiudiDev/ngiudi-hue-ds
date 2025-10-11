import React from "react";
import PropTypes from "prop-types";

import { merge } from "lodash";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { animations } from "../../theme/animations";
import { breakpoints } from "../../theme/breakpoints";
import { typography } from "../../theme/typography";
import { shadows } from "../../theme/shadows";
import { colors } from "../../theme/colors";
import { icons } from "../../theme/icons";

const DEFAULT_PROPS = {
  children: null,
};

export const ThemeProvider = (props) => {
  const attrs = merge({}, DEFAULT_PROPS, props);

  const theme = {
    animations: animations,
    breakpoints: breakpoints,
    colors: colors,
    icons: icons,
    shadows: shadows,
    typography: typography,
  };

  return (
    <StyledThemeProvider theme={theme}>
      {/* Preconexión a Google Fonts */}
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap" rel="stylesheet" />

      {attrs.children}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};