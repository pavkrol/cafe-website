import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import Navigation from "./Navigation"
import { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring"

const HeaderWrapper = styled(animated.header)`
  height: ${props => (props.scrolled ? "60px" : "80px")};
  background-color: #ffffff;
  display: flex;
  padding: 0 50px;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: height 0.2s ease-in;
`

const Header = () => {
  const [scrolled, toggleScrolling] = useState(false)
  const shrink = useSpring({
    config: {
      duration: 200,
    },
    height: scrolled ? 70 : 80,
  })

  useEffect(() => {
    window.addEventListener("scroll", () => changeHeight())
    return window.removeEventListener("scroll", () => changeHeight())
  }, [])

  const changeHeight = () => {
    window.pageYOffset > 200 ? toggleScrolling(true) : toggleScrolling(false)
  }

  return (
    <HeaderWrapper scrolled={scrolled} style={shrink}>
      <Logo scrolled={scrolled} />
      <Navigation />
    </HeaderWrapper>
  )
}

export default Header
