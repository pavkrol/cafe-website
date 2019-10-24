import React from "react"
import styled from "styled-components"
import Tile from "./Tile"

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
  @media (max-width: ${props => props.theme.large}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 55% 1fr;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 45% 25% 1fr;
  }
`

const Hero = () => {
  return (
    <HeroWrapper>
      <Tile area="left">Come and visit our little place in the world</Tile>
      <Tile area="top-right">Taste our coffee</Tile>
      <Tile area="bottom-right">Check our products</Tile>
    </HeroWrapper>
  )
}

export default Hero
