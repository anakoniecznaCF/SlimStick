import {
  ThirdSectionBackground,
  ThirdSectionSubtitle,
  ThirdSectionWrapper,
  ActionList,
  ActionListItem,
  OrangeText,
} from './ThirdSection.styled';
import {FlexWrapper} from '../../blocks/index';
import OneAction from './OneAction/OneAction';
import data from '../../../../data/productActionData';

const ThirdSection = () => {
  return (
    <ThirdSectionBackground>
      <ThirdSectionWrapper>
        <ThirdSectionSubtitle>
          <OrangeText>Działanie produktu potwierdzone</OrangeText> <br />{' '}
          licznymi testami klinicznymi
        </ThirdSectionSubtitle>
        <ActionList>
          {data.map((action, index) => {
            return (
              <FlexWrapper as={ActionListItem} centerColumnBoth key={index + '948jddjie948'}>
                <OneAction
                  img={action.img}
                  title={action.title}
                  text={action.text}
                />
              </FlexWrapper>
            );
          })}
        </ActionList>
      </ThirdSectionWrapper>
    </ThirdSectionBackground>
  );
};

export default ThirdSection;
