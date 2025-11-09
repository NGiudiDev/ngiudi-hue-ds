import { styled } from "styled-components";

const Circle = styled("div")((props) => `
  align-items: center;
  
  background-color: ${props.$isCompleted
    ? props.theme.colors.primary.main
    : "transparent"
  };  
  
  border-color: ${props.$isCompleted
    ? props.theme.colors.primary.main
    : props.theme.colors.black.disabled
  };

  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
    
  display: flex;
  height: 24px;
  justify-content: center;
  width: 24px;
`);

const Label = styled("span")((props) => `
  color: ${props.$isCompleted
    ? props.theme.colors.primary.main
    : props.theme.colors.black.disabled
  };

  font-family: Public Sans, sans-serif;
  font-size: ${props.theme.typography.captionRegular.size};
  font-weight: ${props.theme.typography.captionRegular.weight};
  padding-left: 8px;
`);

const Number = styled("span")((props) => `
  color: ${props.$isCompleted
    ? props.theme.colors.white.main
    : props.theme.colors.black.disabled
  };
  
  font-family: Public Sans, sans-serif;
  font-size: ${props.theme.typography.bodySemibold.size};
  font-weight: ${props.theme.typography.bodySemibold.weight};
`);

const Wrapper = styled("div")`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Styles = {
  Circle,
  Label,
  Number,
  Wrapper,
};