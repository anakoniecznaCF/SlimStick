import {
  FifthSectionBackground,
  FifthSectionWrapper,
  CarouselWrapper,
  arrowNextStyle,
  arrowPrevStyle,
  indicatorStyles
} from './FifthSection.styled';
import {OneClientOpinion} from '../../blocks/index';
import data from '../../../../data/opinionsData';
import { Carousel } from 'react-responsive-carousel';

const FifthSection = () => {
  return (
    <FifthSectionBackground>
      <FifthSectionWrapper>
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
                  role='button'
                  onClick={onClickHandler}
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
             {data.fifthSection.map((opinion, index) => {
              return (
                <OneClientOpinion
                  key={index + 'jie938sh47sj'}
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
      </FifthSectionWrapper>
    </FifthSectionBackground>
  );
};

export default FifthSection;
