import React from "react"
import styled from "styled-components"

const PostWrapper = styled.article`
  background-color: #ffffff;
  padding: 40px 30px;
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  time {
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 0.7rem;
    color: #aeaeae;
    display: block;
  }
`

const Content = styled.div`
  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    text-transform: capitalize;
    margin-bottom: 15px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 2rem;
  }
`

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <h2>{post.markdownRemark.frontmatter.title}</h2>
      <time>{post.markdownRemark.frontmatter.date}</time>
      <Content
        dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}
      ></Content>
    </PostWrapper>
  )
}
export default Post
