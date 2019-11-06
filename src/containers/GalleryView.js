import React, { useState } from "react"
import styled from "styled-components"
import CustomLink from "../components/CustomLink"
import Img from "gatsby-image"
import Slider from "../components/Slider"
import Button from "../components/Button"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"

const GalleryWrapper = styled.section`
  background: linear-gradient(
    90deg,
    rgba(196, 196, 196, 0.14) 0.52%,
    rgba(208, 208, 208, 0.278984) 48.96%,
    #e7e7e7 99.48%
  );
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  padding-left: 10%;
`

const GalleryGrid = styled.article`
  min-height: 600px;
  background-color: #ffffff;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 35% 65%;
  @media (max-width: 1100px) {
    grid-template-rows: 40% 10% 50%;
    grid-template-rows: 30% 70%;
    margin: 130px 0;
  }
  @media (max-width: 800px) {
    grid-template-rows: 400px auto auto 300px;
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    grid-template-rows: 300px auto auto 200px;
    grid-template-columns: 1fr;
  }
`

const Aside = styled.aside`
  padding: 8% 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: span 1;
  grid-row: 1 / 3;
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 2rem;
  }
  @media (max-width: 1350px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 1.6rem;
    }
  }
  @media (max-width: 1100px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  @media (max-width: 800px) {
    grid-row: 2 / 3;
    grid-column: span 1;
  }
`

const Photo = styled(animated.div)`
  grid-column: ${props => (props.gridPosition === "right" ? "3 / 4" : "2 / 3")};
  grid-row: ${props => (props.gridPosition === "right" ? "1 / 3" : "2 / 3")};
  div {
    position: relative;
    width: 100%;
    height: 100%;
    bottom: ${props => (props.gridPosition === "bottom" ? "-50px" : "80px")};
    left: ${props => (props.gridPosition === "bottom" ? "0" : "-40px")};
  }
  @media (max-width: 1100px) {
    grid-column: ${props =>
      props.gridPosition === "right" ? "3 / 4" : "1 / 3"};
    grid-row: ${props => (props.gridPosition === "right" ? "1 / 3" : "3 / 4")};
    div {
      bottom: ${props => (props.gridPosition === "bottom" ? "-50px" : "0")};
      left: ${props => (props.gridPosition === "bottom" ? "-30px" : "0")};
      transform: ${props =>
        props.gridPosition === "right" ? "scale(1.4)" : "scale(1)"};
    }
  }
  @media (max-width: 800px) {
    grid-column: span 1;
    grid-row: ${props => (props.gridPosition === "right" ? "1 / 2" : "4 / 5")};
    div {
      transform: scale(1);
      left: ${props => (props.gridPosition === "bottom" ? "-30px" : "40px")};
      bottom: ${props => (props.gridPosition === "bottom" ? "-50px" : "30px")};
    }
  }
`

const GalleryButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  @media (max-width: 1100px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    justify-content: flex-start;
    padding: 0 15%;
  }
  @media (max-width: 800px) {
    grid-column: span 1;
    grid-row: 3 / 4;
  }
`

const GalleryView = () => {
  const preview_img = useStaticQuery(graphql`
    query Preview {
      inside1: file(relativePath: { eq: "gallery5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inside2: file(relativePath: { eq: "gallery4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const slide_down = useSpring({
    from: {
      transform: "translateY(100%)",
    },
    to: {
      transform: "translateY(0)",
    },
  })

  const slide_right = useSpring({
    from: {
      transform: "translateX(100%)",
    },
    to: {
      transform: "translateX(0)",
    },
  })

  const [galleryOpen, setGalleryOpen] = useState(false)

  const toggleGallery = () => {
    setGalleryOpen(!galleryOpen)
  }

  return (
    <GalleryWrapper>
      <GalleryGrid>
        <Aside>
          <h2>Feel at home</h2>
          <p>
            Lorem ipsum dolor amet blue bottle vexillologist tattooed subway
            tile letterpress succulents. Authentic fam cray green juice franzen
            jianbing ennui. Fingerstache celiac tofu blog.{" "}
          </p>
          <CustomLink size="small" to="/">
            go back
          </CustomLink>
        </Aside>
        <GalleryButtonArea>
          <Button size="small" clickFn={toggleGallery}>
            gallery
          </Button>
        </GalleryButtonArea>
        <Photo gridPosition="right" style={slide_right}>
          <Img
            fluid={preview_img.inside1.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </Photo>
        <Photo gridPosition="bottom" style={slide_down}>
          <Img
            fluid={preview_img.inside2.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </Photo>
      </GalleryGrid>
      {galleryOpen ? <Slider closeFn={toggleGallery} /> : null}
    </GalleryWrapper>
  )
}

export default GalleryView
