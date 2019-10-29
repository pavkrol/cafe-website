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
  @media (max-width: 1300px) {
    padding: 80px 8%;
  }
  @media (max-width: 600px) {
    padding: 80px 4%;
  }
`
const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px 100px 300px 80px;
  grid-gap: 50px;
  div:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  div:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
  }
  div:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  div:nth-child(4) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
  }
  div:nth-child(5) {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
  }
  @media (max-width: ${props => props.theme.medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto) 80px;
    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4),
    div:nth-child(5) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
`

const MoreNewsArea = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
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
              key={post.node.frontmatter.path}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              path={post.node.frontmatter.path}
              excerpt={post.node.excerpt}
            />
          )
        })}
        <MoreNewsArea>
          <Button size="small">More news...</Button>
        </MoreNewsArea>
      </PostsGrid>
    </NewsSectionWrapper>
  )
}

export default NewsSection
