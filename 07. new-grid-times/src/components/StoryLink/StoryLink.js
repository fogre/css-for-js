import styled from 'styled-components/macro';

const StoryLink = styled.a`
  --space: 16px;

  &:not(:first-of-type) {
    padding-top: var(--space);
  }

  &:not(:last-of-type) {
    padding-bottom: var(--space);
    border-bottom: 1px solid var(--color-gray-300);
  }
`

export default StoryLink;