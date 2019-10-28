import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import CustomLink from "../components/CustomLink"

const DetailsViewWrapper = styled.section`
  margin-top: 80px;
  padding: 100px 10%;
  background: linear-gradient(
    90deg,
    rgba(196, 196, 196, 0.14) 0.52%,
    rgba(208, 208, 208, 0.278984) 48.96%,
    #e7e7e7 99.48%
  );
`

const Photo = styled.div`
  width: 45%;
  height: 55vh;
  position: fixed;
  top: 130px;
  left: 0;
  overflow: hidden;
  div {
    height: 100%;
  }
`
const ContentBox = styled.article`
  padding-left: 60%;
  background-color: #ffffff;
`

const HomepageLink = styled(CustomLink)`
  position: fixed;
  left: calc(45% - 250px);
  bottom: 100px;
`

const DetailsView = ({ img_src }) => {
  return (
    <DetailsViewWrapper>
      <Photo>
        <Img
          fluid={img_src}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="photo of a black coffee on a table"
        />
      </Photo>
      <HomepageLink as={CustomLink} to="/">
        go back
      </HomepageLink>
      <ContentBox>
        <h2>Fair Trade & Fair Play</h2>
        <p>
          Fair trade is an institutional arrangement designed to help producers
          in developing countries achieve better trading conditions. Members of
          the fair trade movement advocate the payment of higher prices to
          exporters, as well as improved social and environmental standards. The
          movement focuses in particular on commodities, or products which are
          typically exported from developing countries to developed countries,
          but also consumed in domestic markets (e.g. Brazil, India and
          Bangladesh) most notably handicrafts, coffee, cocoa, wine, sugar,
          fresh fruit, chocolate, flowers and gold.
        </p>
        <p>
          The movement seeks to promote greater equity in international trading
          partnerships through dialogue, transparency, and respect. It promotes
          sustainable development by offering better trading conditions to, and
          securing the rights of, marginalized producers and workers in
          developing countries.[3] Fair trade is grounded in three core beliefs;
          first, producers have the power to express unity with consumers.
          Secondly, the world trade practices that currently exist promote the
          unequal distribution of wealth between nations. Lastly, buying
          products from producers in developing countries at a fair price is a
          more efficient way of promoting sustainable development than
          traditional charity and aid.
        </p>
        <p>
          Fair trade labelling organizations commonly use a definition of fair
          trade developed by FINE, an informal association of four international
          fair trade networks: Fairtrade Labelling Organizations International,
          World Fair Trade Organization (WFTO), Network of European Worldshops
          and European Fair Trade Association (EFTA). Specifically, fair trade
          is a trading partnership, based on dialogue, transparency, and
          respect, that seeks greater equity in international trade. Fair trade
          organizations, backed by consumers, are engaged actively in supporting
          producers, awareness raising, and in campaigning for changes in the
          rules and practice of conventional international trade.
        </p>
      </ContentBox>
    </DetailsViewWrapper>
  )
}

export default DetailsView
