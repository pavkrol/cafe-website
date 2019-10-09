import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import Navigation from "./Navigation"

const HeaderWrapper = styled.header`
  height: 8vh;
  background-color: #ffffff;
  display: flex;
  padding: 0 50px;
`

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Navigation />
  </HeaderWrapper>
)

export default Header
