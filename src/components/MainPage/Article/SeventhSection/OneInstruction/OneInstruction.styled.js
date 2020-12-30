import styled from 'styled-components';

export const Title = styled.h3`
  line-height: 2.2rem;
  font-weight: 900;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  padding-top: 1.6rem;
  margin: 1.5rem 0;

  @media (min-width: 576px) {
    padding-top: 2rem;
    margin: 1.875rem 0;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin: 3rem 0;
    line-height: 3.85rem;
    padding-top: 0;
  }

  @media (min-width: 1200px) {
    font-size: 4rem;
    margin: 3rem 0;
    line-height: 3.85rem;
    padding-top: 0;
  }
`;


export const Text = styled.p`
  line-height: 2.2rem;
  margin: 1.45rem 0;
  position: relative;
  z-index: 2;

  @media (min-width: 576px) {
    line-height: 2.9rem;
    margin: 1.8rem 0;
  }

  @media (min-width: 768px) {
    margin: 1.5rem 0;
  }
  
  @media (min-width: 1200px) {
    line-height: 3.6rem;
    margin: 1.8rem 0;
  }
`;

export const BoldText = styled.span`
  text-transform: uppercase;
  font-weight: 900;
`;
