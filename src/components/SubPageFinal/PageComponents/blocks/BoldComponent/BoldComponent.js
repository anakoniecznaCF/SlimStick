import React from 'react'
import styled from 'styled-components'
const StyledBold = styled.span`
  display: inline-block;
  & > strong {
    color: #034C9B;
     & > span {
       color: #F0B21C;
     } 
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