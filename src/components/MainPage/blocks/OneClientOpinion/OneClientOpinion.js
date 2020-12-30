import { ImageWrapper, Image, Content, Title, Text, Name } from './OneClientOpinion.styled';

const OneClientOpinion = ({ img, title, text, name, achievment }) => {
  return (
    <div>
      <ImageWrapper>
        <Image src={img} alt='customer-photo' />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Name>{name}</Name>
        {achievment}
      </Content>
    </div>
  );
};

export default OneClientOpinion;
