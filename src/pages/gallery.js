import React from "react"
import Layout from "../components/layout"
import GalleryView from "../containers/GalleryView"
import SEO from "../components/seo"
import { theme } from "../components/theme"
import { ThemeProvider } from "styled-components"

const Gallery = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Coffee Republic | Gallery" />
        <GalleryView />
      </Layout>
    </ThemeProvider>
  )
}

export default Gallery
