import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';
import Image from '../Image/Image';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <ImageWrapper>
          <StyledImage alt={image.alt} src={image.src}/>
        </ImageWrapper>
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  grid-area: image;
`;

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  max-width: 250px;
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: ${25 / 16 / 1.125};

  /* Optical alignment */
  margin-top: -2px;

  @media ${QUERIES.tabletOnly} {
    margin-top: 0;
  }
`;

const Abstract = styled.p`
  max-width: 250px;

  /* Hides the overflow caused by having this inside a grid container that forces it's height to grow*/
  align-self: start;

  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: clip;
`;

export default SecondaryStory;
