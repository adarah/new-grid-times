import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
import Image from '../Image';

const MainStory = ({
  id,
  title,
  image,
  location,
  abstract,
  ...delegated
}) => {
  return (
    <Wrapper {...delegated}>
      <a href={`/story/${id}`}>
        <StyledImage alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
      </a>
      <Abstract>
        <Location>{location}</Location> — {abstract}
      </Abstract>
      <ReadMore href="/story">Continue Reading…</ReadMore>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  height: 320px;
  object-fit: cover;
  border-radius: 4px;
`;

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  line-height: ${28/ 16 / 1.5};
`;

const Abstract = styled.p`
  font-size: 1rem;
  margin-bottom: 1em;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: clip;

  @media ${QUERIES.tabletOnly} {
    -webkit-line-clamp: 16;
  }
`;

const Location = styled.span`
  text-transform: uppercase;
`;

const ReadMore = styled.a`
  font-weight: var(--font-weight-medium);
  font-style: italic;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 1px;
  }
`;

export default MainStory;
