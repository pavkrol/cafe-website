import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsSection from "../containers/ProductsSection"
import NewsSection from "../containers/NewsSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProductsSection />
    <NewsSection />
  </Layout>
)

export default IndexPage
