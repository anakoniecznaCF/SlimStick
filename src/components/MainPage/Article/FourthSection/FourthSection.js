import {
  FourthSectionBackground,
  FourthSectionWrapper,
  FourthSectionSubtitle,
  YellowText,
} from './FourthSection.styled';
import OneAdvantage from './OneAdvantage/OneAdvantage';
import data from '../../../../data/advanatgesData';

const FourthSection = () => {
  return (
    <FourthSectionBackground>
      <FourthSectionWrapper>
        <FourthSectionSubtitle>
          Dzięki rewolucyjnym plastrom{' '}
          <YellowText>Slimstick Patches:</YellowText>
        </FourthSectionSubtitle>
        <ul>
          {data.map((advantage, index) => {
            return (
              <li key={index + '847jdbhdj74'}>
                <OneAdvantage
                  reverse={advantage.id % 2 === 0}
                  img={advantage.img}
                  text={advantage.text}
                />
              </li>
            );
          })}
        </ul>
      </FourthSectionWrapper>
    </FourthSectionBackground>
  );
};

export default FourthSection;
