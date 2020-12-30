import {
  OneInstructionWrapper,
  OneInstructionTitle,
} from './OneInstruction.styled';

const OneInstruction = ({ title, text }) => {
  return (
    <OneInstructionWrapper>
      <OneInstructionTitle>{title}</OneInstructionTitle>
      <p>{text}</p>
    </OneInstructionWrapper>
  );
};

export default OneInstruction;
