import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import { QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper>
              <MiniStory key={data.id} {...data} />
            </MiniStoryWrapper>  
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'markets'
      'sports';
    gap: 16px;

  }
`;

const MarketsSection = styled.section`
  grid-area: 'markets';

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }  
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(
      auto-fill,
      minmax(min(170px, 100%), 1fr)
    );
`;

const SportsSection = styled.section`
  grid-area: 'sports';

  @media ${QUERIES.tabletAndUp} {
    overflow: auto;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(
      auto-fill,
      minmax(min(170px, 100%), 1fr)
    );

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    width: max-content;
  }
`;

const MiniStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    width: 220px;
    padding-bottom: 16px;
  }  
  
`

export default SpecialtyStoryGrid;
