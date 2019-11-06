import React from "react"
import styled from "styled-components"
import arrow from "../images/arrow.svg"

const ArrowWrapper = styled.button`
  background-image: url(${arrow});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  position: absolute;
  left: 10px;
  width: 40px;
  height: 40px;
  top: calc(50% - 20px);
  opacity: 0.5;
  cursor: pointer;
  transform: rotate(180deg);
  :hover {
    opacity: 1;
  }
`

const ArrowLeft = ({ goToPrevSlide }) => {
  return <ArrowWrapper onClick={goToPrevSlide}></ArrowWrapper>
}

export default ArrowLeft
