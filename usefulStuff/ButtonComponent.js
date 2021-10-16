import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZE = {
  small: {
    '--padding': '4px 12px',
    '--fontSize': 16/16+'rem',
  },
  medium: {
    '--padding': '12px 20px',
    '--fontSize': 18/16+'rem',
  },
  large: {
    '--padding': '16px 32px',
    '--fontSize': 24/16+'rem',
    '--borderRadius': '4px'
  }
}

const Button = ({ variant, size, children, className }) => {
  const style= size ? SIZE[size] : SIZE.medium;

  switch (variant) {
    case "outline":
      return (
        <ButtonOutline style={style} className={className}>
          {children}
        </ButtonOutline>  
      )
    case "ghost":
      return (
        <ButtonGhost style={style}>
          {children}
        </ButtonGhost>  
      )
    default:
      return (
        <ButtonFill style={style}>
          {children}
        </ButtonFill>   
      )
  }
};

const ButtonBase = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: var(--fontSize);
  color: ${COLORS.white};
  border: 2px solid transparent;
  border-radius: var(--borderRadius, 2px);
  padding: var(--padding);

`

const ButtonFill = styled(ButtonBase)`
  background-color: ${COLORS.primary};
`

const ButtonOutline = styled(ButtonBase)`
  color: ${COLORS.primary};
  background-color: ${COLORS.white};
  border: 2px solid;

  &:hover {
    outline: 2px solid;
  }
`

const ButtonGhost = styled(ButtonBase)`
  background-color: transparent;
  color: ${COLORS.gray};
`

export default Button;
