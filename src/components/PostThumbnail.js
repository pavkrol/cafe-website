import React from "react"
import styled from "styled-components"
import Button from "./Button"

const PostThumbnailWrapper = styled.div`
  background: #ffffff;
  padding: 40px 50px;
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
      153.9deg,
      rgba(154, 173, 156, 0.55) 0%,
      #9aad9c 84.05%
    );
    pointer-events: none;
    z-index: -1;
  }
`

const PostTitle = styled.h3`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  text-transform: uppercase;
`

const PostDate = styled.time`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  font-style: italic;
  color: #595353;
  font-weight: 400;
  margin-bottom: 10px;
  display: block;
`

const PostShortDesc = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8rem;
`

const PostThumbnail = ({ title, date, excerpt, path }) => {
  return (
    <PostThumbnailWrapper>
      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
      <PostShortDesc>{excerpt}</PostShortDesc>
      <Button size="small">Read more</Button>
    </PostThumbnailWrapper>
  )
}

export default PostThumbnail
