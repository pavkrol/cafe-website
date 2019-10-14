import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  background: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 250px;
  height: 85px;
  border: 0.5px solid black;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  :after {
    background: #979c9c;
    content: "";
    height: 170px;
    left: -100px;
    opacity: 0.2;
    position: absolute;
    top: -45px;
    transform: rotate(35deg);
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
    width: 60px;
  }
  :hover:after {
    transform: translateX(400px) rotate(35deg);
  }
`

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>
}

export default Button
