import React from "react"
import bg_img from "../images/post_bg.jpg"
import styled from "styled-components"
import Post from "../components/Post"
import Archive from "../components/Archive"
import CustomLink from "../components/CustomLink"

const SinglePostWrapper = styled.section`
  min-height: 100vh;
  background-image: url(${bg_img});
  background-color: #979c9c;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding: 120px 15% 100px 15%;
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: auto 80px 1fr;
  grid-gap: 40px 100px;
  article {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }
  aside {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`

const SinglePost = ({ post }) => {
  return (
    <SinglePostWrapper>
      <Post post={post} />
      <Archive />
      <CustomLink>Go back to homepage</CustomLink>
    </SinglePostWrapper>
  )
}

export default SinglePost
