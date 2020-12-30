import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.p`
  font-size: 2.5rem;
  margin: 2.5rem 0;
  font-weight: 900;

  @media (min-width: 576px) {
    font-size: 3.2rem;
    margin: 3.2rem 0;
  }

  @media (min-width: 768px) {
    font-size: 2.8rem;
    margin: 2.8rem 0;
  }

  @media (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  width: 80%;
  display: block;
  margin: 1.2rem auto;
  font-weight: 400;

  @media (min-width: 576px) {
    font-size: 1.75rem;
  }
`;

export const Name = styled.p`
  font-size: 1.8rem;
  margin: 0.4rem 0;
  font-weight: 900;
  color: ${({theme}) => theme.colors.orange};

  @media (min-width: 576px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3.2rem;
    margin: 1.3rem 0;
  }

  @media (min-width: 1200px) {
    font-size: 3.6rem;
    margin: 1.5rem 0;
  }
`;

export const AchievmentText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  width: 70%;
  margin: 0.4rem auto;
  padding-bottom: 3rem;
  line-height: normal;

  @media (min-width: 576px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
    width: 100%;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

export const Bold = styled.span`
  font-weight: 900;
`;
