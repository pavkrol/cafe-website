import React from "react"
import bg_img from "../images/post_bg.jpg"
import styled from "styled-components"
import Post from "../components/Post"
import Archive from "../components/Archive"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"

const SinglePostWrapper = styled.section`
  min-height: 100vh;
  background-image: url(${bg_img});
  background-color: #979c9c;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding: 120px 15% 100px 15%;
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-template-rows: auto 80px 1fr;
  grid-gap: 40px 100px;
  position: relative;
  z-index: 0;
  article {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
  aside {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  @media (max-width: 1400px) {
    padding: 120px 8% 100px 8%;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, auto);
    grid-gap: 40px;
    article {
      grid-column: span 2;
      grid-row: span 1;
    }
    aside {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 80px;
    article {
      grid-column: span 1;
    }
  }
`
const HomepageLink = styled(animated(Link))`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  :after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -15px;
    right: -15px;
    background: linear-gradient(
      146.96deg,
      rgba(132, 132, 151, 0.55) 0%,
      #848497 84.05%
    );
    pointer-events: none;
    z-index: -1;
  }
  :visited,
  :active,
  & {
    text-decoration: none;
    color: #000000;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 2rem;
  }
  :hover {
    font-weight: 400;
  }
  @media (max-width: 1100px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`

const SinglePost = ({ post }) => {
  const slide_left = useSpring({
    from: {
      transform: "translateX(-100%)",
    },
    to: {
      transform: "translateX(0)",
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

  return (
    <SinglePostWrapper>
      <Post post={post} style={slide_left} />
      <Archive style={slide_right} />
      <HomepageLink as={Link} to="/" style={slide_right}>
        Go back to homepage
      </HomepageLink>
    </SinglePostWrapper>
  )
}

export default SinglePost
