import styled from 'styled-components';
import { Background, Container } from '../../blocks/index';
import backgroundMobile from '../../../../assets/Mobile/m_SlimStick-strona2-bg-sekcja-jak-stosowac.png';
import BackgroundDesktop from '../../../../assets/Desktop/d_SlimStick-strona2-bg-sekcja-jak-stosowac.png';

export const SeventhSectionBackground = styled(Background)`
  background-image: url(${backgroundMobile});
  margin-top: -17rem;
  overflow: auto;
  z-index: 4;

  @media (min-width: 768px) {
    background-image: url(${BackgroundDesktop});
  }
`;

export const SeventhSectionWrapper = styled(Container)`
  width: 90%;
  margin: 7rem auto 15rem;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 13rem;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const BackgroundImage = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    height: 70%;
  }
`;
