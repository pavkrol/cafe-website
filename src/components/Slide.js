import React from "react"
import Img from "gatsby-image"

const Slide = ({ fluid }) => {
  return <Img fluid={fluid} objectFit="cover" objectPosition="50% 50%" />
}

export default Slide
