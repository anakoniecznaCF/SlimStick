import styled from 'styled-components';
import backgroundMobile from '../../../../assets/Mobile/SlimStick-strona2-bg-sekcja-dzieki-bg.png';
import backgroundDesktop from '../../../../assets/Desktop/SlimStick-strona2-bg-sekcja-dzieki-bg.png';
import { Subtitle, Background, Wrapper } from '../../blocks/index';

export const FourthSectionBackground = styled(Background)`
  background-image: url(${backgroundMobile});
  overflow: auto;
  z-index: 4;
  margin-top: -9rem;

  @media (min-width: 768px) {
    background-image: url(${backgroundDesktop});
    margin-top: -25rem;
  }
`;

export const FourthSectionWrapper = styled(Wrapper)`
  margin: 10rem auto 18rem;

  @media (min-width: 768px) {
    margin: 20rem auto 14rem;
  }
`;

export const FourthSectionSubtitle = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.white};
  margin: 1.5rem auto;
  width: 90%;
`;

export const YellowText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  display: block;
`;
