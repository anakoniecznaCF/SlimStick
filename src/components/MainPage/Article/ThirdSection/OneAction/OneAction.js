import {
  OneActionWrapper,
  ImageWrapper,
  Image,
  TextContent,
  Text,
} from './OneAction.styled';

const OneAction = ({ img, title, text }) => {
  return (
    <OneActionWrapper>
      <ImageWrapper>
        <Image src={img} alt='' />
      </ImageWrapper>
      <TextContent>
        {title}
        <Text>{text}</Text>
      </TextContent>
    </OneActionWrapper>
  );
};

export default OneAction;
