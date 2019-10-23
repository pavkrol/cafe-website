import styled from "styled-components"
import React from "react"

const BurgerWrapper = styled.button`
  position: absolute;
  top: calc(50% - 1rem);
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  @media (min-width: 1100px) {
    display: none;
  }
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #000000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`

const Burger = ({ isOpen, toggleMenu }) => {
  return (
    <BurgerWrapper isOpen={isOpen} onClick={() => toggleMenu(!isOpen)}>
      <div />
      <div />
      <div />
    </BurgerWrapper>
  )
}

export default Burger
