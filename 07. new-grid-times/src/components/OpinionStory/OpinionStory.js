import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

import StoryLink from '../StoryLink';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <OpinionStoryLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </OpinionStoryLink>
  );
};


const OpinionStoryLink = styled(StoryLink)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;

    &:not(:first-of-type) {
      margin-top: 0;
    }

    &:not(:last-of-type) {
      padding-bottom: 0;
      border: none;
    }
  }  
`

const Wrapper = styled.article`
  --avatarSize: 48px;
  color: var(--color-gray-900);
  display: grid;
  grid-template-areas:
    'author avatar'
    'article avatar';
  gap: 7px 32px;
  grid-template-columns: 1fr var(--avatarSize);

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  grid-area: avatar;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  grid-area: author;
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
`;

const ArticleTitle = styled.h3`
  grid-area: article;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
