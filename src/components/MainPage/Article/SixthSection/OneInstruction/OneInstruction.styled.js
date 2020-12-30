import styled from 'styled-components';

export const OneInstructionWrapper = styled.div`
  text-align: center;
`;

export const OneInstructionTitle = styled.h3`
  font-size: 1.8rem;
  line-height: 2.75rem;
  padding-bottom: 0.8rem;
  color: ${({theme}) => theme.colors.orange};
  text-transform: uppercase;
  font-weight: 900;
  margin: 1.8rem 0;
  position: relative;

  @media (min-width: 576px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin: 3.5rem 0;
  }
`;


