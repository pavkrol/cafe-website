import React from "react"
import styled from "styled-components"

const PostWrapper = styled.article`
  background-color: #ffffff;
  padding: 20px 30px;
`

const Post = ({ post }) => {
  return (
    <PostWrapper>
      <h2>{post.markdownRemark.frontmatter.title}</h2>
      <time>{post.markdownRemark.frontmatter.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}></div>
    </PostWrapper>
  )
}
export default Post
