import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderBottom': '1px',
    '--fontSize': (14/16)+'rem',
    '--height': '24px',
    iconSize: 16
  },
  large: {
    '--borderBottom': '2px',
    '--fontSize': (18/16)+'rem',
    '--height': '36px',
    iconSize: 24
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = size ? SIZES[size] : SIZES.small;

  return (
    <Wrapper style={{ ...style, '--width': width+'px' }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': style.iconSize+'px' }}>
        <Icon id={icon} size={style.iconSize}/>
      </IconWrapper>  
      <Input
        style={style}
        type='text'
        placeholder={placeholder}
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  border-bottom: var(--borderBottom) solid black;
  color: ${COLORS.gray700};
  display: block;
  position: relative;
  width: var(--width);

  &:hover {
    color: ${COLORS.black};
  }
`
const Input = styled.input`
  background: transparent;
  border: none;
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  height: var(--height);
  outline: none;
  text-indent: var(--height);
  width: 100%;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 1px auto;
    outline-offset: 3px;
  }
`
const IconWrapper = styled.div`
  height: var(--size);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
 
`
export default IconInput;