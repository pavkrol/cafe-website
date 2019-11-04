import React from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import CustomLink from "../components/CustomLink"
import { useSpring, animated } from "react-spring"

const DetailsViewWrapper = styled.section`
  margin-top: 80px;
  padding: 100px 10% 60px 10%;
  background: linear-gradient(
    90deg,
    rgba(196, 196, 196, 0.14) 0.52%,
    rgba(208, 208, 208, 0.278984) 48.96%,
    #e7e7e7 99.48%
  );
  @media (max-width: 1400px) {
    padding: 100px 5% 60px 5%;
  }
`

const Photo = styled(animated.div)`
  width: 45%;
  height: 55vh;
  position: fixed;
  top: 130px;
  left: 0;
  overflow: hidden;
  z-index: 1;
  div {
    height: 100%;
  }
  @media (max-width: 1100px) {
    width: 85%;
    z-index: 0;
  }
  @media (max-width: 850px) {
    height: 40vh;
  }
`
const ContentBox = styled(animated.article)`
  padding: 100px 100px 100px 55%;
  background-color: #ffffff;
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 2rem;
  }
  @media (max-width: 1400px) {
    padding: 100px 80px 100px 50%;
  }
  @media (max-width: 1100px) {
    margin-top: 30vh;
    padding: 100px;
    position: relative;
    z-index: 1;
  }
  @media (max-width: 850px) {
    margin-top: 20vh;
  }
  @media (max-width: 600px) {
    padding: 70px 40px;
  }
`

const HomepageLink = styled(CustomLink)`
  position: fixed;
  left: calc(45% - 250px);
  top: calc(55vh + 180px);
  @media (max-width: 1100px) {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
  }
`

const DetailsView = ({ img_src }) => {
  const slide_left = useSpring({
    from: {
      transform: "translateX(-100%)",
    },
    to: {
      transform: "translateX(0)",
    },
  })

  const slide_right = useSpring({
    from: {
      transform: "translateX(100%)",
    },
    to: {
      transform: "translateX(0)",
    },
  })

  return (
    <DetailsViewWrapper>
      <Photo style={slide_left}>
        <Img
          fluid={img_src}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="photo of a black coffee on a table"
        />
      </Photo>
      <ContentBox style={slide_right}>
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
      <HomepageLink as={CustomLink} to="/">
        go back
      </HomepageLink>
    </DetailsViewWrapper>
  )
}

export default DetailsView
