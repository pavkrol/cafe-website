import React from "react"
import styled from "styled-components"
import cafe_logo from "../images/cafe_logo.png"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`
const CafeLogo = styled.img`
  width: 50px;
  height: auto;
  filter: grayscale(100%);
`

const CafeName = styled.h1`
  font-size: 1.6rem;
  font-family: "Roboto Slab", serif;
  color: #000;
  font-weight: 400;
  text-transform: uppercase;
`
const Logo = () => {
  return (
    <LogoWrapper>
      <CafeLogo src={cafe_logo} alt="company logo" />
      <CafeName>Coffee Republic</CafeName>
    </LogoWrapper>
  )
}

export default Logo
