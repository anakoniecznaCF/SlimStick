import styled from 'styled-components';
import delivery from '../../../../assets/Desktop/SlimStick-strona2-belka-dostawa.png';

const Background = styled.div`
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.violet};
  color: #fff;

  @media (min-width: 576px) {
    height: 68px;
  }

  @media (min-width: 768px) {
    height: 62px;
  }

  @media (min-width: 1024px) {
    height: 54px;
  }
`;

const TopBarWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 3rem;
  margin-right: 0.8rem;
`;

const TopBarContent = styled.div`
  width: 80%;

  @media (min-width: 1024px) {
    width: auto;
  }
`;

const TopBarText = styled.p`
  font-size: 1rem;
  line-height: 1;

  @media (min-width: 576px) {
    font-size: 1.2rem;
  }

  @media (min-width: 770px) {
    font-size: 1.35rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;

const TopBarTextBold = styled(TopBarText)`
  font-weight: 900;

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const TopBar = () => {
  return (
    <Background>
      <TopBarWrapper>
        <Image src={delivery} alt='' />
        <TopBarContent>
          <TopBarTextBold>
            Bezpieczna dostawa! Nie martw się! Poważnie podchodzimy do
            bezpieczeństwa naszych klientów!
          </TopBarTextBold>
          <TopBarText>
            Nasi kurierzy zmieniają maski i rękawiczki co dwie godziny. Proces
            odstawy i płatności odbywa się bez bezpośredniego kontaktu.
          </TopBarText>
        </TopBarContent>
      </TopBarWrapper>
    </Background>
  );
};

export default TopBar;
