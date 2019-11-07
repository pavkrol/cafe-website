import React from "react"
import styled from "styled-components"
import Tile from "../components/Tile"
import { useStaticQuery, graphql } from "gatsby"

const HeroWrapper = styled.section`
  margin-top: 80px;
  background-color: #fff;
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 35%;
  grid-template-rows: 1fr 55%;
  grid-gap: 4px;
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 45%;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 55% 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 45% 25% 1fr;
  }
`

const Hero = () => {
  const images = useStaticQuery(graphql`
    query Backgrounds {
      cups: file(relativePath: { eq: "cups_of_coffee.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      restaurant: file(relativePath: { eq: "restaurant.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu: file(relativePath: { eq: "cakes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HeroWrapper>
      <Tile
        area="left"
        bg_img={images.restaurant.childImageSharp.fluid}
        linkTo="/gallery"
      >
        Come and visit our little place in the world
      </Tile>
      <Tile
        area="top-right"
        bg_img={images.cups.childImageSharp.fluid}
        linkTo="/"
      >
        Taste our coffee
      </Tile>
      <Tile
        area="bottom-right"
        bg_img={images.menu.childImageSharp.fluid}
        linkTo="/"
      >
        Check our menu
      </Tile>
    </HeroWrapper>
  )
}

export default Hero
