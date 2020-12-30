import styled from 'styled-components';
import { Subtitle, Background, Container } from '../../blocks/index';
import backgroundMobile from '../../../../assets/Mobile/SlimStick-strona2-bg-sekcja-certyfikat.png';
import backgroundDesktop from '../../../../assets/Desktop/SlimStick-strona2-bg-sekcja-certyfikat.png';

export const EightSectionBackground = styled(Background)`
  z-index: 4;
  background-image: url(${backgroundMobile});
  margin-top: -16rem;
  overflow: hidden;

  @media (min-width: 768px) {
    background-image: url(${backgroundDesktop});
  }
`;

export const EightSectionWrapper = styled(Container)`
  width: 90%;
  margin: 9rem auto 2rem;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const EightSectionSubtitle = styled(Subtitle)`
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const ImageWrapperCertificate = styled(ImageWrapper)`
  @media (min-width: 768px) {
    width: 40%;
    margin-left: 1rem;
    transition: all 0.5s ease-in;

    &:hover {
      transform: scale(1.33) translateX(-60%);
      transition: all 0.5s ease-in;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 400;

  @media (min-width: 768px) {
    text-align: justify;
  }
`;

export const TextWrapper = styled.div`
  @media (min-width: 768px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;