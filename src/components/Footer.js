import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  height: 70px;
  background-color: #000;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #767676;
`

const Footer = () => {
  return (
    <FooterWrapper>
      There will be some photos and details how to get to restaurant etc...
    </FooterWrapper>
  )
}

export default Footer
