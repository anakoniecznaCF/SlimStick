import styled, { css } from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;

  ${({ centerRowAlign }) =>
    centerRowAlign &&
    css`
      align-items: center;
    `}

  ${({ centerRowBoth }) =>
    centerRowBoth &&
    css`
      justify-content: center;
      align-items: center;
    `}

    ${({ spaceAroundRow }) =>
    spaceAroundRow &&
    css`
      justify-content: space-around;
      align-items: center;
    `}
    
    ${({ spaceEvenlyRow }) =>
    spaceEvenlyRow &&
    css`
      justify-content: space-evenly;
      align-items: center;
    `}

    ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

    ${({ centerColumnAlign }) =>
    centerColumnAlign &&
    css`
      flex-direction: column;
      justify-content: center;
    `}

  ${({ centerColumnBoth }) =>
    centerColumnBoth &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;

export default FlexWrapper;