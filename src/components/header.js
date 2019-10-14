import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import Navigation from "./Navigation"

const HeaderWrapper = styled.header`
  height: 80px;
  background-color: #ffffff;
  display: flex;
  padding: 0 50px;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Navigation />
  </HeaderWrapper>
)

export default Header
