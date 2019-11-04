import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const ArchiveWrapper = styled.aside`
  background-color: #ffffff;
  padding: 30px;
  position: relative;
  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  ul {
    margin: 0;
  }
  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-family: "Montserrat", sans-serif;
      font-style: italic;
      font-weight: 400;
      font-size: 0.7rem;
      color: #aeaeae;
    }
  }
  a,
  a:visited,
  a:active {
    text-decoration: none;
    color: #000000;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 2rem;
  }
  a:hover {
    font-weight: 500;
  }
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
