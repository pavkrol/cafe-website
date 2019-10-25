import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.button`
  background: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: ${props => (props.size === "small" ? "0.9rem" : "1.1rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: ${props => (props.size === "small" ? "200px" : "250px")};
  height: ${props => (props.size === "small" ? "60px" : "85px")};
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
  @media (max-width: ${props => props.theme.medium}) {
    width: 180px;
    height: 55px;
    font-size: 0.8rem;
    margin: 0 auto;
  }
`

const Button = ({ children, size, path }) => {
  return (
    <ButtonWrapper size={size} to={path}>
      {children}
    </ButtonWrapper>
  )
}

export default Button
