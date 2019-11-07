import React from "react"
import { theme } from "../components/theme"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import Hero from "../containers/Hero"
import SEO from "../components/seo"
import ProductsSection from "../containers/ProductsSection"
import BlogSection from "../containers/BlogSection"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ProductsSection />
      <BlogSection />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
