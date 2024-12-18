import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <DesktopUserActionGroup>
          <Button>Subscribe</Button>
          <SubscriberLink href="/">Already a subscriber?</SubscriberLink>
        </DesktopUserActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;
  color: var(--color-gray-900);

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const DesktopUserActionGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`;

const SubscriberLink = styled.a`
  position: absolute;
  margin-top: 8px;
  text-align: center;
  width: 100%;

  color: var(--color-gray-900);
  font-family: var(--font-family-serif);
  font-style: italic;
  font-size: ${14 / 16}rem;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: ${72+8}px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;

    /* Centers the logo IN THE VIEWPORT.
       It has an assymetrical distance to ActionGroup and UserActionGroup.
       Flex with justify-content: space-between yields a different position */
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: revert;
    justify-items: start;
  }
`;

export default Header;
