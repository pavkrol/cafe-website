import React from "react"
import Layout from "../components/layout"
import Hero from "../containers/Hero"
import SEO from "../components/seo"
import ProductsSection from "../containers/ProductsSection"
import BlogSection from "../containers/BlogSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProductsSection />
    <BlogSection />
  </Layout>
)

export default IndexPage
