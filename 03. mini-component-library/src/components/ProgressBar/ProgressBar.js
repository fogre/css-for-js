/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
  },
  medium: {
    '--height': '16px'
  },
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--radius': '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const parsedVal =  value && value >= 0 ? value : 0;
  const style = size ? SIZES[size] : SIZES.medium;

  return (
      <ProgressBarWrapper
        style={style}
        role='progressbar'
        aria-valuenow={parsedVal}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        <Bar style={{ '--width': parsedVal + '%' }}>
          <VisuallyHidden>{parsedVal}%</VisuallyHidden>
        </Bar>
      </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: var(--radius, 4px);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  height: var(--height);
  margin: 0;
  padding: var(--padding, 0px);
  width: 370px;
  overflow: hidden;
`

const Bar = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: 100%;
  width: var(--width);
  max-width: 100%;
`
export default ProgressBar;
