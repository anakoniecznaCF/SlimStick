import styled from 'styled-components';

export const OneActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextContent = styled.div`
  @media (min-width: 768px) {
    width: 75%;
    margin-left: 5%;
  }
`;

export const Text = styled.p`
  margin: 0 0 2rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h3`
  margin: 0.8rem auto;
  line-height: 2.9rem;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 2.1rem;
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;
