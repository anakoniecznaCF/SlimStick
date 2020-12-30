import styled from 'styled-components';
import { Subtitle, Background, Container, FlexWrapper } from '../../blocks/index';
import background from '../../../../assets/Mobile/SlimStick-strona2-bg-sekcja-blank.png';
import button from '../../../../assets/Desktop/SlimStick-strona2-produkt-czytaj-dalej.png';

export const SecondSectionBackground = styled(Background)`
  background-image: url(${background});
  margin-top: -25rem;
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    background-color: #f3f4f6;
    background-size: 101% 101%;
    padding-bottom: 15rem;
  }
`;

export const SecondSectionWrapper = styled(Container)`
  width: 100%;
  margin: 13rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 375px) {
    width: 90%;
  }

  @media (min-width: 576px) {
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 84%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export const SecondSectionSubtitle = styled(Subtitle)`
  width: 80%;
  padding: 12rem 0 0;

  @media (min-width: 768px) {
    width: 90%;
    margin-bottom: 2rem;
  }
`;

export const Content = styled(FlexWrapper)`
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  width: 96%;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
`;

export const DoctorName = styled.p`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1;

  @media (min-width: 576px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.15rem;
  }
`;

export const DoctorTitle = styled.span`
  @media (min-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const DoctorPosition = styled(DoctorName)`
  font-size: 1.1rem;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const DoctorTextTitle = styled.h3`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 900;
  margin: 0.5rem;
  text-align: center;

  @media (min-width: 576px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 2.85rem;
    margin: 2.2rem 0;
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

export const DoctorText = styled.p`
  margin: 0.5rem 0.3rem;
  font-weight: 400;
  line-height: 2.9rem;
  text-align: center;

  @media (min-width: 576px) {
    line-height: 3.6rem;
  }

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.6rem;
    line-height: 3.2rem;
    margin: 1.6rem 0;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 3.6rem;
  }
`;

export const Button = styled.button`
  position: relative;
  z-index: 99;
  width: 40rem;
  padding: 10px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.9rem;
  font-weight: 700;
  text-decoration: underline;
  width: 100%;
  font-family: 'Arial';

  &::before {
    display: block;
    content: '';
    width: 5.6rem;
    height: 5.6rem;
    background-image: url(${button});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 auto 1rem;
  }

  &::after {
    display: none;
  }

  @media (min-width: 768px) {
    font-size: 2.1rem;

    &::before {
      display: none;
    }

    &::after {
      display: inline-block;
      vertical-align: middle;
      content: '';
      width: 5.6rem;
      height: 5.6rem;
      background-image: url(${button});
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      margin-left: 1rem;
    }
  }

  @media (min-width: 1200px) {
    font-size: 2.4rem;

    &::after {
      width: 7rem;
      height: 7rem;
    }
  }
`;

export const Bold = styled.span`
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

export const TextContent = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%;
    margin-left: 10%;
  }
`;

export const DoctorContent = styled.div`
  width: 90%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;
