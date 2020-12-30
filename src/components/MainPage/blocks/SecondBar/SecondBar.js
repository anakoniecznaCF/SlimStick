import styled from 'styled-components';
import data from '../../../../data/secondBarItemsData';
import SecondBarItem from './SecondBarItem/SecondBarItem';

const Background = styled.div`
  height: 44px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 54px;
  }
`;

const SecondBarWrapper = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & div:last-child {
      margin-right: 0;
  }

  @media (min-width: 1024px) {
    width: 80%;
    justify-content: center;
  }
`;

const SecondBar = () => {
  return (
    <Background>
      <SecondBarWrapper>
        {data.map((item, index) => {
          return <SecondBarItem key={index + '8urnehyu37'} img={item.img} text={item.text} />;
        })}
      </SecondBarWrapper>
    </Background>
  );
};

export default SecondBar;
