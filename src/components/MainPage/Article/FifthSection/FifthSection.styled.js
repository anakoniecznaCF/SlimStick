import styled from 'styled-components';
import { Background, Container } from '../../blocks';
import backgroundMoobile from '../../../../assets/Mobile/SlimStick-strona2-bg-sekcja-97-procent.png';
import backgroundDesktop from '../../../../assets/Desktop/SlimStick-strona2-bg-sekcja-testimonial.png';
import next from '../../../../assets/next.svg';
import prev from '../../../../assets/prev.svg';

export const FifthSectionBackground = styled(Background)`
  background-image: url(${backgroundMoobile});
  position: relative;
  margin-top: -20rem;
  overflow: auto;
  z-index: 4;
  padding: 5rem 0;

  @media (min-width: 768px) {
    background-image: url(${backgroundDesktop});
    padding-top: 15rem;
  }
`;

export const FifthSectionWrapper = styled(Container)`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const CarouselWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  z-index: 1;
  margin-bottom: 50px;
  cursor: grab;

  @media (min-width: 576px) {
    width: 85%;
  }

  .carousel .slide {
    background-color: transparent;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background-color: transparent;
  }
`;

export const arrowNextStyle = {
  position: 'absolute',
  zIndex: 99,
  top: '50%',
  right: '0',
  width: 30,
  height: 45,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  backgroundImage: `url(${next})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

export const arrowPrevStyle = {
  position: 'absolute',
  zIndex: 99,
  top: '50%',
  left: '0',
  width: 30,
  height: 45,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  backgroundImage: `url(${prev})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

export const indicatorStyles = {
  background: '#ccc',
  width: 8,
  height: 8,
  borderRadius: '50%',
  display: 'inline-block',
  margin: '0 4px',
  cursor: 'pointer'
};
