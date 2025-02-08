import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: lightgreen; /* Matches the page's color scheme */
  position: fixed; /* Keeps the nav bar at the top */
  top: 0; /* Aligns to the top */
  left: 0;
  width: 100%; /* Spans the full width of the page */
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem; /* Adjusts horizontal spacing */
  z-index: 1000; /* Ensures it's always on top of other content */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Adds subtle shadow */
`;

export const NavLink = styled(Link)`
  color: #808080; /* Matches the color scheme */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #4d4dff; /* Highlights active link */
  }

  &:hover {
    color: #333; /* Provides visual feedback */
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
