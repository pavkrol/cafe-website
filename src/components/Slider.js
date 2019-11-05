import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Slide from "./Slide"
import ArrowLeft from "./ArrowLeft"
import ArrowRight from "./ArrowRight"

const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

const Slider = () => {
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

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide++)
  }

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide--)
  }

  const getSlideWidth = () => {
    return document.querySelector(".slide")
  }

  return (
    <SliderWrapper>
      {images.allFile.edges.map((image, index) => {
        return <Slide key={index} fluid={image.node.childImageSharp.fluid} />
      })}
      <ArrowLeft goToPrevSlide={goToPrevSlide} />
      <ArrowRight goToNextSlide={goToNextSlide} />
    </SliderWrapper>
  )
}

export default Slider
