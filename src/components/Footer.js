import React from "react"
import styled from "styled-components"
import Logo from "./Logo"

const FooterWrapper = styled.footer`
  background-color: #000;
  display: grid;
  color: #767676;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px 1fr;
  padding: 0 10% 80px 10%;
  z-index: 5;
  position: relative;
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 1fr 1fr;
  }
  @media (max-width: 800px) {
    padding: 0 5% 80px 5%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 150px repeat(4, auto);
  }
`

const FooterLogo = styled(Logo)`
  grid-column: span 4;
  justify-content: center;
  align-items: center;
  h1 {
    color: #ffffff;
  }
  img {
    display: none;
  }
  @media (max-width: 1500px) {
    grid-column: span 2;
  }
  @media (max-width: 700px) {
    grid-column: span 1;
  }
`

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  place-self: start center;
  h3 {
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;
    color: #b8b8b8;
    text-transform: uppercase;
    font-weight: 400;
  }
  a,
  a:visited,
  address,
  p {
    font-family: "Montserrat", sans-serif;
    color: #b8b8b8;
    font-size: 1rem;
    text-decoration: none;
    font-style: normal;
    margin-bottom: 0;
    line-height: 2.45rem;
  }
  input {
    height: 40px;
    border: none;
  }
  button {
    height: 40px;
    width: 40px;
    background-color: #9aad9c;
    color: #dcdcdc;
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    :hover {
      background-color: #587a5c;
    }
  }
  @media (max-width: 1500px) {
    place-self: start start;
    padding-left: 25%;
  }
  @media (max-width: 1100px) {
    h3 {
      font-size: 1.2rem;
    }
    a,
    address,
    p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 700px) {
    margin-bottom: 50px;
    h3 {
      margin-bottom: 0.8rem;
    }
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogo as={Logo} logoType="dark" />
      <FooterItem>
        <h3>Contact us</h3>
        <a href="tel:+48123456789">+48 123456789</a>
        <a href="mailto:info@coffeerepublic.com">info@coffeerepublic.com</a>
      </FooterItem>
      <FooterItem>
        <h3>How to find us</h3>
        <address>
          ul. Grunwaldzka 1234/22
          <br />
          80-174 Gdańsk
        </address>
      </FooterItem>
      <FooterItem>
        <h3>Opening hours</h3>
        <p>Monday: closed</p>
        <p>Tuesday - Thursday: 9:00 - 20:00</p>
        <p>Friday - Sunday: 10:00 - 21:00</p>
      </FooterItem>
      <FooterItem>
        <h3>Stay in touch</h3>
        <p>Join our newsletter:</p>
        <form>
          <label>
            <input type="email" required></input>
            <button>&#10148;</button>
          </label>
        </form>
      </FooterItem>
    </FooterWrapper>
  )
}

export default Footer
