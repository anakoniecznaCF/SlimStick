import styled from 'styled-components';

export const OneAdvantageWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  align-items: center;
  text-align: ${(props) => (props.reverse ? 'right' : 'left')};
  margin: 0 0 1.6rem;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 20%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextContainer = styled.div`
  max-width: 70%;
  line-height: 3rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.white};

  @media (min-width: 576px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.15rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`

export const YellowText = styled.span`
  color: ${({theme}) => theme.colors.yellow};
  font-weight: 900;
`