import styled from 'styled-components';

const SecondBarItemWrapper = styled.div`
  // flex: 32%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  @media (min-width: 1024px) {
    // flex: 33.3333%;
    margin-right: 4rem;

  }
`;

const SecondBarItemImage = styled.img`
  height: 90%;
  margin-right: 1rem;
`;

const SecondBarItemText = styled.p`
  font-size: 1rem;
  font-weight: 900;
  line-height: 1;

  @media (min-width: 576px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const SecondBarItem = ({ img, text }) => {
  return (
    <SecondBarItemWrapper>
      <SecondBarItemImage src={img} alt={text} />
      <SecondBarItemText>{text}</SecondBarItemText>
    </SecondBarItemWrapper>
  );
};

export default SecondBarItem;
