import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import Button from "../components/Button"

const ProductWrapper = styled.div`
  margin-left: ${props => (props.position === "left" ? "0" : "17%")}
  width: 75vw;
  height: 45vw;
  position: relative;
  margin-bottom: 100px;
  :after {
    content: "";
    display: block;
    width: 65vw;
    height: 30vw;
    position: absolute;
    bottom: -40px;
    ${props => (props.position === "left" ? "right: -40px" : "left: -40px")}
    background: linear-gradient(
      90deg,
      ${props => props.gradient} 0%,
      ${props => props.gradient} 100%
    );
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
`

const InfoBox = styled.div`
  position: absolute;
  width: 30vw;
  height: 34vw;
  background-color: white;
  padding: 65px;
  top: -25%;
  transition: transform 0.2s ease-in-out;
  transform: translateY(calc(50% + ${props => -props.parallax + "px"}));
  ${props => (props.position === "left" ? "right: -15vw" : "left: -15vw")}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  will-change: transform;
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 2.2rem;
    text-transform: uppercase;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2.2rem;
  }
`

const ProductBox = ({ image_src, gradient, text_data, position }) => {
  const ref = useRef()
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", e => handleScroll(e))
    return window.removeEventListener("scroll", e => handleScroll(e))
  }, [])

  const handleScroll = e => {
    const offset = window.pageYOffset
    const element_y = ref.current.getBoundingClientRect().y
    setParallax((element_y + offset - offset) * 0.01)
  }

  return (
    <ProductWrapper position={position} gradient={gradient}>
      <Photo src={image_src} />
      <InfoBox position={position} ref={ref} parallax={parallax}>
        <h2>{text_data.title}</h2>
        <p>{text_data.paragraph}</p>
        <Button>{text_data.button}</Button>
      </InfoBox>
    </ProductWrapper>
  )
}

export default ProductBox
