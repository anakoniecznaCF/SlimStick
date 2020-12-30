import {
  SeventhSectionBackground,
  SeventhSectionWrapper,
  BackgroundImage,
} from './SeventhSection.styled';
import OneInstruction from './OneInstruction/OneInstruction';
import model from '../../../../assets/modelka_2.png';
import data from '../../../../data/howToUseData';

const SeventhSection = () => {
  return (
    <SeventhSectionBackground>
      <SeventhSectionWrapper>
        <BackgroundImage src={model} />
        {data.map((instruction, index) => {
          return (
            <OneInstruction
              key={index + '87jsnkis87js'}
              title={instruction.title}
              text={instruction.text}
            />
          );
        })}
      </SeventhSectionWrapper>
    </SeventhSectionBackground>
  );
};

export default SeventhSection;
