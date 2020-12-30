import {
  FirstSectionBackground,
  FirstSectionWrapper,
  FirstSectionSubtitle,
  CarouselWrapper,
  arrowNextStyle,
  arrowPrevStyle,
  indicatorStyles
} from './FirstSection.styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { OneClientOpinion, OrangeText } from '../../blocks/index';
import data from '../../../../data/opinionsData';
import { Carousel } from 'react-responsive-carousel';

const FirstSection = () => {
  return (
    <FirstSectionBackground>
      <FirstSectionWrapper>
        <FirstSectionSubtitle>
          Poznaj opinie osób, które już skorzystały ze{' '}
          <OrangeText>slimstick patches</OrangeText> i odzyskały idealną
          sylwetkę w zaledwie 30 dni!
        </FirstSectionSubtitle>
        <CarouselWrapper>
          <Carousel
            infiniteLoop
            showStatus={false}
            swipeable
            emulateTouch
            showThumbs={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowPrevStyle }}
                ></button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type='button'
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowNextStyle }}
                ></button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li style={{ ...indicatorStyles, background: '#000' }} />
                );
              }
              return (
                <li
                  style={indicatorStyles}
                  value={index}
                  key={index}
                  onClick={onClickHandler}
                  role='button'
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {data.firstSection.map((opinion, index) => {
              return (
                <OneClientOpinion
                  key={index + 'ui938djkis02'}
                  img={opinion.img}
                  title={opinion.title}
                  text={opinion.text}
                  name={opinion.name}
                  achievment={opinion.achievment}
                />
              );
            })}
          </Carousel>
        </CarouselWrapper>
      </FirstSectionWrapper>
    </FirstSectionBackground>
  );
};

export default FirstSection;
