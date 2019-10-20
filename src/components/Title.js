import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.h2`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 2.5rem;
  color: #ffffff;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #000000;
  text-transform: uppercase;
`

const Title = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>
}

export default Title
