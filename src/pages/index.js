import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsSection from "../containers/ProductsSection"
import NewsSection from "../containers/NewsSection"
import { theme } from "../components/theme"
import { ThemeProvider } from "styled-components"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ProductsSection />
      <NewsSection />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
