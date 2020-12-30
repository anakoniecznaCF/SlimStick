import styled from 'styled-components';
import background from '../../../../assets/Mobile/m_SlimStick-strona2-bg-sekcja-dlaczego.png';
import { Background, Wrapper } from '../../blocks';

export const SixthSectionBackground = styled(Background)`
  background-image: url(${background});
  margin-top: -14rem;
  overflow: hidden;
  z-index: 4;
`;

export const OrangeText = styled.span`
  color: ${({ theme }) => theme.colors.orange};
`;

export const SixthSectionWrapper = styled(Wrapper)`
  margin: 6rem auto 14rem;
  position: relative;

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  right: 0;
  height: 90%;

  @media (min-width: 768px) {
    transform: translateY(-36%);
  }

  @media (min-width: 1200px) {
    transform: translateY(-38%);
    right: -50%;
  }
`;
