import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const ArchiveWrapper = styled.aside`
  background-color: #ffffff;
  padding: 20px 30px;
  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
`

const Archive = () => {
  const data = useStaticQuery(graphql`
    query PostsList {
      allMarkdownRemark(
        limit: 3
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <ArchiveWrapper>
      <h3>Recent posts</h3>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.frontmatter.path}>
              <Link to={edge.node.frontmatter.path}>
                {edge.node.frontmatter.title}
              </Link>
              <span>{edge.node.frontmatter.date}</span>
            </li>
          )
        })}
      </ul>
    </ArchiveWrapper>
  )
}

export default Archive
