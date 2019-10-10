import React from "react"
import styled from "styled-components"
import Tile from "./Tile"
import { useStaticQuery, graphql } from "gatsby"

const HeroWrapper = styled.section`
  margin-top: 70px;
  background-color: palegoldenrod;
  height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: 1fr 35vw;
  grid-template-rows: 1fr 55vh;
  grid-gap: 10px;
`

const Hero = () => {
  const right_top_bg = useStaticQuery(graphql`
    query RightTopBackground {
      allFile(
        filter: {
          ext: { eq: ".jpg" }
          relativePath: { eq: "coffee_beans.jpg" }
        }
      ) {
        edges {
          node {
            id
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

  return (
    <HeroWrapper>
      <Tile
        background={right_top_bg.allFile.edges[0].node.childImageSharp.fluid}
        area="left"
      >
        Come and visit our little place in the world
      </Tile>
      <Tile area="top-right">Taste our coffee</Tile>
      <Tile area="bottom-right">Check our products</Tile>
    </HeroWrapper>
  )
}

export default Hero
