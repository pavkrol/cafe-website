import React from "react"
import styled from "styled-components"
import cafe_logo from "../images/cafe_logo.png"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
const CafeLogo = styled.img`
  width: 50px;
  height: auto;
  filter: grayscale(100%);
  margin: 0;
  transition: transform 0.2s ease-in;
  @media (max-width: ${props => props.theme.medium}) {
    width: 40px;
  }
`

const CafeName = styled.h1`
  font-size: 1.6rem;
  font-family: "Roboto Slab", serif;
  color: #000;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  transition: transform 0.2s ease-in;
  :after {
    content: "by pavkrol";
    display: block;
    font-family: "Yellowtail", sans-serif;
    transition: transform 0.2s ease-in;
    font-size: 1rem;
    position: absolute;
    bottom: -11px;
    right: -24px;
    transform: rotate(-16deg);
    text-transform: lowercase;
  }
  @media (max-width: ${props => props.theme.medium}) {
    font-size: 1.4rem;
    :after {
      font-size: 0.8rem;
    }
  }
`
const Logo = ({ className }) => {
  return (
    <LogoWrapper className={className}>
      <CafeLogo src={cafe_logo} alt="company logo" />
      <CafeName>Coffee Republic</CafeName>
    </LogoWrapper>
  )
}

export default Logo
