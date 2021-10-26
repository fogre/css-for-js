import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import StoryLink from '../StoryLink';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <StoryLink href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </StoryLink>
  );
};

const Wrapper = styled.article`
  --contentSize: 120px;
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: var(--contentSize) 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      'image image'
      'heading heading'
      'abstract abstract';
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: var(--contentSize);
  border-radius: 4px;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 9px;
  }
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
   display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default SecondaryStory;
