import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const LeftActionGroup = () => (
  <ActionGroup>
    <button>
      <Search size={24} />
    </button>
    <button>
      <Menu size={24} />
    </button>
  </ActionGroup>
);

const RightActionGroup = () => (
  <ActionGroup>
    <button>
      <User size={24} />
    </button>
  </ActionGroup>
);

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
         <LeftActionGroup />
         <RightActionGroup />
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopAndUpActionGroup>
          <LeftActionGroup />
        </LaptopAndUpActionGroup>  
        <Logo />
        <SubscribeSection>
          <Button>subscribe</Button>
          <SubscribeLink>already a subscriber?</SubscribeLink>
        </SubscribeSection>  
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

const LaptopAndUpActionGroup = styled.div`
  display: none; 

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`
const SubscribeSection = styled(LaptopAndUpActionGroup)`
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    align-self: flex-end;
  }  
`

const SubscribeLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: underline;
  font-style: italic;
 `

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 72px; 
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 83px;
  }
`;

export default Header;
