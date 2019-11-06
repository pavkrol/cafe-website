import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Slide from "./Slide"
import ArrowLeft from "./ArrowLeft"
import ArrowRight from "./ArrowRight"
import closeIcon from "../images/close.svg"

const SliderBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  width: 800px;
  height: 600px;
  overflow: hidden;
  background-color: black;
`

const ImgWindow = styled.div`
  display: flex;
  width: 4800px;
  height: 600px;
  transform: ${props => `translateX(-${props.currentSlide * 800}px)`};
  transition: transform 0.2s ease-in-out;
`

const CloseButton = styled.button`
  background-image: url(${closeIcon});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  position: absolute;
  right: 15px;
  width: 20px;
  height: 20px;
  top: 15px;
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

const Slider = ({ closeFn }) => {
  const images = useStaticQuery(graphql`
    query Gallery {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const initialState = { currentSlide: 0 }

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { currentSlide: state.currentSlide + 1 }
      case "decrement":
        return { currentSlide: state.currentSlide - 1 }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const goToNextSlide = () => {
    if (state.currentSlide < images.allFile.edges.length - 1) {
      dispatch({ type: "increment" })
    }
  }

  const goToPrevSlide = () => {
    if (state.currentSlide > 0) {
      dispatch({ type: "decrement" })
    }
  }

  return (
    <SliderBackground>
      <SliderWrapper>
        <ImgWindow currentSlide={state.currentSlide}>
          {images.allFile.edges.map((image, index) => {
            return (
              <Slide key={index} fluid={image.node.childImageSharp.fluid} />
            )
          })}
        </ImgWindow>
        <ArrowLeft goToPrevSlide={goToPrevSlide} />
        <ArrowRight goToNextSlide={goToNextSlide} />
        <CloseButton onClick={closeFn} />
      </SliderWrapper>
    </SliderBackground>
  )
}

export default Slider
