import React from "react"
import styled from "styled-components"
import ProductBox from "../components/ProductBox"
import { products_descriptions } from "../data/products_descriptions"
import { useStaticQuery, graphql } from "gatsby"

const SectionWrapper = styled.section`
  background: linear-gradient(
    90deg,
    rgba(196, 196, 196, 0.14) 0.52%,
    rgba(208, 208, 208, 0.278984) 48.96%,
    #e7e7e7 99.48%
  );
  padding: 80px;
  min-height: 500px;
`

const ProductsSection = () => {
  const images = useStaticQuery(graphql`
    query Images {
      coffee_img: file(relativePath: { eq: "coffee_table.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food_img: file(relativePath: { eq: "food.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bread_img: file(relativePath: { eq: "bread.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SectionWrapper>
      <ProductBox
        image_src={images.coffee_img.childImageSharp.fluid}
        gradient="#8d715b"
        text_data={products_descriptions[0]}
        position="left"
      />
      <ProductBox
        image_src={images.food_img.childImageSharp.fluid}
        gradient="#848497"
        text_data={products_descriptions[1]}
        position="right"
      />
      <ProductBox
        image_src={images.bread_img.childImageSharp.fluid}
        gradient="#979C9C"
        text_data={products_descriptions[2]}
        position="left"
      />
    </SectionWrapper>
  )
}

export default ProductsSection
