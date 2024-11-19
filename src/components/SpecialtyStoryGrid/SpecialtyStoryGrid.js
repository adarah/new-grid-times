import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import {QUERIES} from '../../constants';

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
        <SportStoriesWrapper>

        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportStoryWrapper>
          ))}
        </SportsStories>
        </SportStoriesWrapper>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas: "market" "sports";

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "market sports";
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  grid-area: market;
  padding-right: 16px;
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section`
  grid-area: sports;
  padding-left: 16px;
  border-left: solid 1px var(--color-gray-300);
`;

const SportStoriesWrapper = styled.div`
  overflow: auto;
  padding-bottom: 16px;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    min-width: 300px;
    align-items: start;
  }
`;

const SportStoryWrapper = styled.div`
  flex: 1 0 220px;
`;

export default SpecialtyStoryGrid;
