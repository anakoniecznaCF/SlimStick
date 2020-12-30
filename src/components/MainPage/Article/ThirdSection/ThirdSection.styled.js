import styled from 'styled-components';
import {Subtitle, Wrapper} from '../../blocks/index';
import backgroundDesktop from '../../../../assets/Desktop/SlimStick-strona2-bg-sekcja-blank.png';

export const ThirdSectionBackground = styled.section`
  background-image: none;
  background-color: ${({theme}) => theme.colors.white};
  margin-top: -16rem;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    background-image: url(${backgroundDesktop});
    background-color: transparent;
    background-size: 101% 101%;
    background-repeat: no-repeat;
    background-position: 50%;
    margin-top: -20rem;
    position: relative;
    overflow: auto;
    padding-bottom: 10rem;
  }
`;

export const ThirdSectionSubtitle = styled(Subtitle)`
  margin: 1.5rem auto;
`;

export const ThirdSectionWrapper = styled(Wrapper)`
  padding: 18rem 0 8rem;
`;

export const ActionList = styled.ul`
  width: 90%;
  margin: 0 auto;
`;

export const ActionListItem = styled.li`
  list-style: none;
  margin-bottom: 1.6rem;
`;

export const OrangeText = styled.span`
  @media (min-width: 768px) {
    color: ${({ theme }) => theme.colors.orange};
  }
`;


