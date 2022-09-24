import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.header`
  padding-top: 40px;
  padding-bottom: 40px;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #171a21;
`;

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  max-width: 930px;
  z-index: 1;
  margin: 0 auto;
  padding: 0 15px;
`;

export const NavList = styled.ul`
  align-items: center;
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
  margin: 0;
  margin-left: 40px;
`;

export const NavListItem = styled.li``;

export const NavListLink = styled(NavLink)`
  padding: 15px 5px;
  text-decoration: none;
  font-size: 14px;
  font-size: 14px;
  line-height: 16px;
  color: #b8b6b4;
  &:hover,
  &:focus {
    color: white;
  }
  &.active {
    color: orange;
    &:hover,
    &:focus {
      color: white;
    }
  }
`;
