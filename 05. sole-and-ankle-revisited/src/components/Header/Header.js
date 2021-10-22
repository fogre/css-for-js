import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import NavLink from '../NavLink';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileHeader>
          <Icon
            aria-label="Shopping bag"
            as={UnstyledButton}
            size={24}
            id='shopping-bag'
            onClick={() => console.log('SHSD')}
          />
          <Icon
            aria-label="Search"
            as={UnstyledButton}
            size={24}
            id='search'
          />
          <Icon
            aria-label="Menu"
            as={UnstyledButton}
            size={24}
            id='menu'
            onClick={() => setShowMobileMenu(true)}
          />
        </MobileHeader>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.mobiles} {
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.phones} {
    padding: 18px 16px;
  }
`;

const MobileHeader = styled.div`
  display: none;
  color: ${COLORS.gray[900]};
  gap: 40px;

  @media ${QUERIES.mobiles} {
    display: flex;
  }

  @media ${QUERIES.phones} {
    gap: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    9.1vw - 4.2rem,
    4rem
  );
  margin: 0px 48px;

  @media ${QUERIES.mobiles} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

export default Header;
