import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SinglePost from "../containers/SinglePost"
import { useStaticQuery, graphql } from "gatsby"

const FirstPost = () => {
  const POST_QUERY = useStaticQuery(graphql`
    query Post {
      markdownRemark(frontmatter: { path: { eq: "/first-post" } }) {
        frontmatter {
          title
          path
          date
        }
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="First post" />
      <SinglePost post={POST_QUERY} />
    </Layout>
  )
}

export default FirstPost
