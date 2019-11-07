import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavWrapper = styled.nav`
  display: flex;
`
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  @media (max-width: 1100px) {
    width: 40%;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    position: absolute;
    padding-top: 80px;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    background: #ffffff;
    transform: ${props =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

const NavItem = styled.li`
  list-style: none;
  margin: 0 0 0 30px;
  @media (max-width: 1100px) {
    margin: 0;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration: none;
    font-family: "Lato", sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.17em;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: -3px;
      left: 0;
      background-color: #000;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`

const Navigation = ({ isOpen, scrolled }) => {
  return (
    <NavWrapper>
      <NavList isOpen={isOpen} scrolled={scrolled}>
        <NavItem>
          <Link to="/fair-trade">Our mission</Link>
        </NavItem>
        <NavItem>
          <Link to="/gallery">Our cafe</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Our coffee</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Our food</Link>
        </NavItem>
      </NavList>
    </NavWrapper>
  )
}

export default Navigation
