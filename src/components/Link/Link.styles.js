import styled from "styled-components";

const LinkContainer = styled("a")((props) => {
  const typographyVariant = props.theme.typography[props.$type] || props.theme.typography.bodyRegular;
  
  return `
    background-color: transparent;
    color: ${(props) => props.theme.colors.link.main};
    font-family: Public Sans, sans-serif;
    font-size: ${typographyVariant.size};
    font-weight: ${typographyVariant.weight};
    line-height: ${typographyVariant.lineHeight};
    text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme.colors.link.hovered};
    }

    &:active {
      color: ${(props) => props.theme.colors.link.pressed};
    }

    &:visited {
      color: ${(props) => props.theme.colors.link.visited};
    }
  `;
});

export const Styles = {
  LinkContainer,
};