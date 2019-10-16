import React from "react"
import styled from "styled-components"
import ProductBox from "../components/ProductBox"
import table_img from "../images/coffee_table.jpg"
import food_img from "../images/food.jpg"
import bread_img from "../images/bread.jpg"
import { products_descriptions } from "../data/products_descriptions"

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
  return (
    <SectionWrapper>
      <ProductBox
        image_src={table_img}
        gradient="#8d715b"
        text_data={products_descriptions[0]}
        position="left"
      />
      <ProductBox
        image_src={food_img}
        gradient="#848497"
        text_data={products_descriptions[1]}
        position="right"
      />
      <ProductBox
        image_src={bread_img}
        gradient="#979C9C"
        text_data={products_descriptions[2]}
        position="left"
      />
    </SectionWrapper>
  )
}

export default ProductsSection
