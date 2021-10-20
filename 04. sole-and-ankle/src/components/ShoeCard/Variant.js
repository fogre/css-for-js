import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';

const variantTypes = {
  'on-sale': {
    text: 'sale',
    backgroundColor: COLORS.primary,
  },
  'new-release': {
    text: 'Just Released!',
    backgroundColor: COLORS.secondary,
  }
}

const Variant = ({ variant }) => {
  if (!variant || variant === 'default') {
    return null;
  }

  const variantType = variantTypes[variant];

  return (
    <VariantWrapper style={{
      '--backgroundColor': variantType.backgroundColor
    }}>
      {variantType.text}
    </VariantWrapper>
  )
}

const VariantWrapper = styled.div`
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold};
  font-size: ${14/16+'rem'};
  position: absolute;
  top: 12px;
  right: -6px;
  padding: 7px 9px 7px 11px;
  border-radius: 2px;
  background-color: var(--backgroundColor);
`

export default Variant;