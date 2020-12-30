import styled, { css } from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px){
    flex-wrap: nowrap;
  }

  ${({column}) => 
    column && 
    css`
    flex-direction: column;
  `}

  ${({center}) => 
    center && 
    css`
    justify-content: center;
  `}

  ${({space_around}) => 
    space_around && 
    css`
    justify-content: space-around;
  `}

  ${({flex_end}) => 
    flex_end && 
    css`
    justify-content: flex-end;
  `}

  ${({flex_start}) => 
    flex_start && 
    css`
    justify-content: flex-start;
  `}
`

export { FlexWrapper }