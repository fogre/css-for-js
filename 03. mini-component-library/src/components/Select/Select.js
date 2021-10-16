import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <Button>
        {displayedValue}
        <Icon id={'chevron-down'} size={14} strokeWidth={3}/>
      </Button>
    </Wrapper>
  );
};

const SelectWrapper = styled.select`
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
`
const Button = styled.div`
  font-size: 16px;
  display: inline-flex;
  gap: 24px;
  align-items: flex-end;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;

  ${SelectWrapper}:focus + & {
    outline: 5px auto;
  }

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`
const Wrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate;
`
export default Select;
