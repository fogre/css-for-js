/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import NavLink from '../NavLink';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <Icon
          as={UnstyledButton}
          id='close'
          size={24}
          onClick={onDismiss}
        />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsla(220, 5%, 40%, 0.8);
`

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: min(300px, 90%);
  background: ${COLORS.white};
  padding: 26px 20px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const Nav = styled.nav`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const Footer = styled.footer`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled.a`
  font-size: ${14/16+'rem'};
  color: ${COLORS.gray[700]};
  text-decoration: none;
`

export default MobileMenu;
