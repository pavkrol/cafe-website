import React from "react"
import styled from "styled-components"
import Tile from "./Tile"

const HeroWrapper = styled.section`
  margin-top: 70px;
  background-color: #fff;
  height: calc(100vh - 70px);
  display: grid;
  grid-template-columns: 1fr 35vw;
  grid-template-rows: 1fr 55vh;
  grid-gap: 10px;
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
