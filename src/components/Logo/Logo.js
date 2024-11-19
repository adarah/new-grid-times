import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';
import { QUERIES } from '../../constants';

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: 3rem;
  color: var(--color-offblack);

  @media ${QUERIES.tabletAndUp} {
    font-size: 4rem;
    line-height: ${84/64};
  }
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: ${-12/16}rem;
  line-height: ${24/16/1.125};
`;

export default Logo;
