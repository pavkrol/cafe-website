import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const TileWrapper = styled.div`
  grid-column: ${props => (props.area === "left" ? "1 / 2" : "2 / 3")};
  grid-row: ${props => (props.area === "left" ? "1 / 3" : "span 1")};
`

const Tile = ({ children, area, background }) => {
  return (
    <TileWrapper area={area}>
      <BackgroundImage fluid={background}>
        <div
          style={{
            height: "100%",
          }}
        >
          <Link>{children}</Link>
        </div>
      </BackgroundImage>
    </TileWrapper>
  )
}

export default Tile
