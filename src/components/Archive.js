import React from "react"
import styled from "styled-components"

const ArchiveWrapper = styled.aside`
  background-color: #ffffff;
  padding: 20px 30px;
  h3 {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
`

const Archive = () => {
  return (
    <ArchiveWrapper>
      <h3>Recent posts</h3>
    </ArchiveWrapper>
  )
}

export default Archive
