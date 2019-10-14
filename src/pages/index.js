import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsSection from "../containers/ProductsSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProductsSection />
  </Layout>
)

export default IndexPage
