import React from "react"
import "./layout.css"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./Footer"
import { useSpring, animated } from "react-spring"

const Layout = ({ children }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return (
    <animated.div style={fade}>
      <Header />
      <main>{children}</main>
      <Footer />
    </animated.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
