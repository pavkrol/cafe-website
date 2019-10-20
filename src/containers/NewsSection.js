import React from "react"
import styled from "styled-components"
import bg_image from "../images/blog_bg.jpg"
import Title from "../components/Title"
import Button from "../components/Button"
import { useStaticQuery, graphql } from "gatsby"
import PostThumbnail from "../components/PostThumbnail"

const NewsSectionWrapper = styled.section`
  background-image: url(${props => props.src});
  padding: 80px 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  position: relative;
`
const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr) 60px;
  grid-gap: 50px;
`

const NewsSection = () => {
  const POSTS = useStaticQuery(graphql`
    query Posts {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            excerpt
            frontmatter {
              path
              date(formatString: "MMMM DD, YYYY")
              title
            }
          }
        }
      }
    }
  `)

  return (
    <NewsSectionWrapper src={bg_image}>
      <Title>Keep updated</Title>
      <PostsGrid>
        {POSTS.allMarkdownRemark.edges.map(post => {
          return (
            <PostThumbnail
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              path={post.node.frontmatter.path}
              excerpt={post.node.excerpt}
            />
          )
        })}
        <Button>More news...</Button>
      </PostsGrid>
    </NewsSectionWrapper>
  )
}

export default NewsSection
