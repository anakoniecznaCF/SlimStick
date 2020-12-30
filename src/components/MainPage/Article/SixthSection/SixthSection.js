import {
  SixthSectionBackground,
  OrangeText,
  SixthSectionWrapper,
  BackgroundImage,
} from './SixthSection.styled';
import { Subtitle } from '../../blocks';
import OneInstruction from './OneInstruction/OneInstruction';
import model from '../../../../assets/modelka_1.png';
import data from '../../../../data/whyToUseData';

const SixthSection = () => {
  return (
    <SixthSectionBackground>
      <SixthSectionWrapper>
        <BackgroundImage src={model} alt='' />
        <Subtitle>
          Dlaczego Slimstick Patches{' '}
          <OrangeText>to absolutny numer 1</OrangeText> w odchudzaniu?
        </Subtitle>
        <div>
          {data.map((instruction, index) => {
            return (
              <OneInstruction
                key={index + '87unbhyt65gv'}
                title={instruction.title}
                text={instruction.text}
              />
            );
          })}
        </div>
      </SixthSectionWrapper>
    </SixthSectionBackground>
  );
};

export default SixthSection;
