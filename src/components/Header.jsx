import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100; /* Ensures it stays on top of other content */
    background-color: transparency; /* Matches the page background */
    padding: 2rem 1rem;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    font-size: 1.2rem;

    a {
        text-decoration: none;
        color: white;
        flex: 1;
        text-align: center;
        margin: 0 auto;
        opacity: 0.3; /* Default opacity */
        font-style: normal; /* Default style */
        font-weight: normal; /* Default weight */
        transition: all 0.3s ease; /* Smooth transitions for hover and active states */

        &:hover {
            opacity: 1;
            font-style: italic;
        }
        &.active {
            font-style: italic;
            opacity: 1; /* Active page link has full opacity */
        }
    }
`;

const Header = () => {
    const location = useLocation(); // Get the current route
  
    return (
      <StyledHeader>
        <a
          href="#saetbyeol"
          className={location.pathname === '/saetbyeol' ? 'active' : ''}
        >
          SAETBYEOL
        </a>
        <a
          href="#projects"
          className={location.pathname === '/projects' ? 'active' : ''}
        >
          PROJECTS
        </a>
        <a
          href="#about"
          className={location.pathname === '/about' ? 'active' : ''}
        >
          ABOUT
        </a>
      </StyledHeader>
    );
  };
  
  export default Header;
