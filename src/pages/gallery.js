import React from "react"
import Layout from "../components/layout"
import GalleryView from "../containers/GalleryView"
import SEO from "../components/seo"

const Gallery = () => {
  return (
    <Layout>
      <SEO title="Coffee Republic | Gallery" />
      <GalleryView />
    </Layout>
  )
}

export default Gallery
