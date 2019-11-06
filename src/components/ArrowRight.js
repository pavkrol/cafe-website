import React from "react"
import arrow from "../images/arrow.svg"
import styled from "styled-components"

const ArrowWrapper = styled.button`
  background-image: url(${arrow});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  position: absolute;
  right: 10px;
  width: 40px;
  height: 40px;
  top: calc(50% - 20px);
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

const ArrowRight = ({ goToNextSlide }) => {
  return <ArrowWrapper onClick={goToNextSlide}></ArrowWrapper>
}

export default ArrowRight
