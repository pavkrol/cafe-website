import React, { Component } from "react"
import Layout from "./layout"
import SEO from "./seo"
import SinglePost from "../containers/SinglePost"
import { graphql } from "gatsby"

export default class PostLayout extends Component {
  render() {
    const post = this.props.data
    return (
      <Layout>
        <SEO title="First post" />
        <SinglePost post={post} />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        date
        path
      }
      html
    }
  }
`
