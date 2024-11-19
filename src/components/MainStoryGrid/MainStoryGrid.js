import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <OpinionSectionTitleWrapper>
          <OpinionSectionTitle>Opinion</OpinionSectionTitle>
        </OpinionSectionTitleWrapper>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story main-story secondary-stories"
      "advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories"
    ;
    gap: 48px 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story main-story secondary-stories opinion-stories"
      "main-story main-story secondary-stories opinion-stories"
      "main-story main-story advertisement advertisement"
    ;
    gap: 16px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: solid 1px var(--color-gray-300);
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: solid 1px var(--color-gray-300);
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSectionTitleWrapper = styled.div`
  position: relative;

  @media ${QUERIES.tabletOnly} {
    margin-left: -4px;
  }
`;

const OpinionSectionTitle = styled(SectionTitle)`
  line-height: 1;
  margin-bottom: 11px;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
    align-items: start;
  }
`;

const SecondaryStoryWrapper = styled.div`
  padding-block: 16px;
  border-bottom: solid 1px var(--color-gray-300);

  ${StoryList} > &:first-child {
    padding-top: 0;
  }

  ${StoryList} > &:last-child {
    border-bottom: revert;
    padding-bottom: 0;
  }
`;

const OpinionStoryWrapper = styled(SecondaryStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    border-bottom: 0;
    padding: 0;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: solid 1px var(--color-gray-300);
  }
`;

export default MainStoryGrid;
