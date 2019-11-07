import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const TileWrapper = styled.div`
  grid-column: ${props => (props.area === "left" ? "1 / 2" : "2 / 3")};
  grid-row: ${props => (props.area === "left" ? "1 / 3" : "span 1")};
  position: relative;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  @media (max-width: 1100px) {
    grid-column: ${props => (props.area === "left" ? "1 / 3" : "span 1")};
    grid-row: ${props => (props.area === "left" ? "1 / 2" : "2 / 3")};
  }
  @media (max-width: 600px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`

const TileLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-size: ${props => (props.area === "left" ? "2.5rem" : "1.5rem")};
  line-height: ${props => (props.area === "left" ? "2.8rem" : "1.5rem")};
  margin: 0 ${props => (props.area === "left" ? "25% 0 5%" : "5%")};
  margin-top: ${props => (props.area === "left" ? "20%" : "15%")};
  display: inline-block;
  padding: 5px 10px;
  text-align: ${props => (props.area === "left" ? "left" : "right")};
  position: relative;
  z-index: 2;
  transition: color 0.2s ease-in-out;
  background: #000000;
  float: right;
  :hover + div {
    transform: scale(1.15) rotate(3deg);
    div:after {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  @media (max-width: 1100px) {
    font-size: ${props => (props.area === "left" ? "2rem" : "1.5rem")};
    line-height: ${props => (props.area === "left" ? "2.8rem" : "1.5rem")};
  }
  @media (max-width: 600px) {
    font-size: ${props => (props.area === "left" ? "1.6rem" : "1.3rem")};
    line-height: ${props => (props.area === "left" ? "2.2rem" : "1.5rem")};
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: transform 0.4s ease-in-out;
  div {
    height: 100%;
    :after {
      content: "";
      position: absolute;
      display: block;
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      transition: background-color 0.4s ease-in-out;
      z-index: 1;
    }
  }
`

const Tile = ({ children, area, bg_img, linkTo }) => {
  return (
    <TileWrapper area={area}>
      <TileLink area={area} as={Link} to={linkTo}>
        <span>{children}</span>
      </TileLink>
      <Background>
        <Img fluid={bg_img} objectFit="cover" objectPosition="50% 50%" />
      </Background>
    </TileWrapper>
  )
}

export default Tile
