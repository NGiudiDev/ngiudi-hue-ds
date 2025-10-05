import { styled } from "styled-components";

import { marginProperties, paddingProperties } from "../../utils/spacing";

const Item = styled("div")`    
  box-sizing: border-box;
  text-align: ${(props) => props.$align};
  
  ${(props) => paddingProperties(props)}

  ${(props) => {
    let styles = "";
    
    //TODO: revisar esta función para agregarla en un util.
    Object.keys(props.theme.breakpoints).forEach(breakpoint => {
      const value = props[`$${breakpoint}`];

      if (value !== undefined) {
        const breakpointValue = props.theme?.breakpoints[breakpoint];
        const flexBasis = value === "auto" ? "auto" : `${(value / 12) * 100}%`;
        const maxWidth = value === "auto" ? "none" : `${(value / 12) * 100}%`;
        
        const rule = `
          flex-basis: ${flexBasis};
          flex-grow: 0;
          max-width: ${maxWidth};
        `;
        
        // xs no necesita media query (mobile first)
        if (breakpoint === "xs" || breakpointValue === "0px") {
          styles += rule;
        } else {
          styles += `
            @media (min-width: ${breakpointValue}) {
              ${rule}
            }
          `;
        }
      }
    });
    
    return styles;
  }}
`;

const Wrapper = styled("div")`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
    
  ${(props) => marginProperties(props)}
  ${(props) => paddingProperties(props)}
`;

export const Styles = {
  Item,
  Wrapper,
};