import React from "react"
import Hero from "../containers/Hero"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ProductsSection from "../containers/ProductsSection"
import BlogSection from "../containers/BlogSection"
import { theme } from "../components/theme"
import { ThemeProvider } from "styled-components"

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
