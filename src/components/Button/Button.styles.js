import styled, { css } from "styled-components";

import { marginProperties } from "../../utils/spacing";

const ContentWrapper = styled("span")`
  ${(props) => `   
    align-items: center;
    display: flex;
    visibility: ${props.$isLoading ? "hidden" : "visible"};
  `}
`;

const FilledButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: ${props.theme.colors.primary.main};
    border: none;
    border-radius: 4px;
    box-shadow: ${props.theme.shadows.level1};
    color: ${props.theme.colors.white.main};
    display: inline-flex;
    font-family: Public Sans, sans-serif;
    font-size: ${props.theme.typography.bodySemibold.size};
    font-weight: ${props.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 9px 20px;    
    position: relative;
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}

    &:hover:enabled {
      background-color: ${props.theme.colors.primary.middleHovered};
      box-shadow: ${props.theme.shadows.level2};
    }

    &:active:enabled {
      background-color: ${props.theme.colors.primary.darkPressed};
      box-shadow: ${props.theme.shadows.level3};
      color: ${props.theme.colors.white.main};
    }

    &:disabled {
      background-color: ${props.theme.colors.black.border};
      box-shadow: none;
    }
  `}
`;

const LoaderWrapper = styled("span")`
  ${(props) => css`
    animation-name: ${props.theme.animations.spin};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    display: ${props.$isLoading ? "block" : "none"};
    left: calc(50% - 10px); /* 10px = half icon size */
    position: absolute;
    top: calc(50% - 10px); /* 10px = half icon size */
  `}
`;

const OutlinedButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: transparent;
    border-color: ${props.theme.colors.primary.main};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: ${props.theme.colors.primary.main};
    display: inline-flex;
    font-family: Public Sans, sans-serif;
    font-size: ${props.theme.typography.bodySemibold.size};
    font-weight: ${props.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 8px 19px;
    position: relative;
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}

    &:hover:enabled {
      background-color: ${props.theme.colors.primary.hovered};
      border-color: ${props.theme.colors.primary.middleHovered};
      color: ${props.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${props.theme.colors.primary.pressed};
      border-color: ${props.theme.colors.primary.darkPressed};
      color: ${props.theme.colors.primary.darkPressed};
    }

    &:disabled {
      border-color: ${props.theme.colors.black.disabled};
      color: ${props.theme.colors.black.disabled};
    }
  `}
`;
    
const TextButton = styled("button")`
  ${(props) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: ${props.theme.colors.primary.main};
    display: inline-flex;
    font-family: Public Sans, sans-serif;
    font-size: ${props.theme.typography.bodySemibold.size};
    font-weight: ${props.theme.typography.bodySemibold.weight};
    height: 38px;
    justify-content: center;
    min-width: 64px;
    padding: 9px 12px;
    position: relative;
    width: ${props.$fullWidth ? "100%" : "auto"};

    ${marginProperties(props)}

    &:hover:enabled {
      background-color: ${props.theme.colors.primary.hovered};
      color: ${props.theme.colors.primary.middleHovered};
    }

    &:active:enabled {
      background-color: ${props.theme.colors.primary.pressed};
      color: ${props.theme.colors.primary.darkPressed};
    }

    &:disabled {
      color: ${props.theme.colors.black.disabled};
    }
  `}
`;

export const Styles = {
  ContentWrapper,
  FilledButton,
  LoaderWrapper,
  OutlinedButton,
  TextButton,
};