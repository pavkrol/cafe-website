import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

const SlideWrapper = styled.div`
  width: 800px;
  height: 600px;
  div {
    width: 100%;
    height: 100%;
  }
`

const Slide = ({ fluid }) => {
  return (
    <SlideWrapper className="slide">
      <Img fluid={fluid} objectFit="contain" objectPosition="50% 50%" />
    </SlideWrapper>
  )
}

export default Slide
