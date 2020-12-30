import React from 'react'
import styled from 'styled-components'
const StyledBold = styled.span`
  display: inline-block;
  & > strong {
    font-weight: bold;
    color: #41348B;
  }

  & > span {
    font-weight: bold;
    color: #555555;
  }
`
const Bold = ({ children }) => {
    return (
        <StyledBold>
            {children}
        </StyledBold>
    )
}

export default Bold;