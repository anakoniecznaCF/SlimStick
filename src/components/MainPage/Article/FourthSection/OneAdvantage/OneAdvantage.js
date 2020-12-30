import {
  OneAdvantageWrapper,
  ImageWrapper,
  Image,
  TextContainer,
} from './OneAdvantage.styled';

const OneAdvantage = ({ img, text, ...props }) => {
  return (
    <OneAdvantageWrapper {...props}>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>
      <TextContainer>{text}</TextContainer>
    </OneAdvantageWrapper>
  );
};

export default OneAdvantage;
