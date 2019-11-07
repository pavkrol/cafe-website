import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { theme } from "../components/theme"
import { ThemeProvider } from "styled-components"
import DetailsView from "../containers/DetailsView"
import { useStaticQuery, graphql } from "gatsby"

const FairTrade = () => {
  const image = useStaticQuery(graphql`
    query FairTradeImage {
      fair_trade_img: file(relativePath: { eq: "fair-trade2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Fair Trade" />
        <DetailsView img_src={image.fair_trade_img.childImageSharp.fluid} />
      </Layout>
    </ThemeProvider>
  )
}

export default FairTrade
