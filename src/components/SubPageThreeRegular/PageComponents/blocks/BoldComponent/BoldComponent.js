import React from 'react'
import styled from 'styled-components'
const StyledBold = styled.span`
  display: inline-block;
  & > span {
    font-weight: bold;
  }
  & > strong {
    font-weight: bold;
    color: #034C9B;
     & > span {
       color: #F0B21C;
     } 
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