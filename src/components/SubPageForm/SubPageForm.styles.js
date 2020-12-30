import styled from 'styled-components';
import { FlexWrapper, ImgWrapper, ContainerWrapper } from './style/StyledComponents/index';

const PageWrapper = styled(ContainerWrapper)`
  display: block;
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: 'Oxygen';
  font-weight: 500;

  @media only screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

const PageHeader = styled.h1`
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: 'Nunito Sans';
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: #034C9B;
`;

const SubHeader = styled.h3`
  margin-top: 40px;
`

const ParagraphOffer = styled.p`
  margin-bottom: 20px;
  font-family: 'Nunito Sans';
  font-size: 16px;
  line-height: 29px;
  color: #555555;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 18px;
  }

  & > span {
    font-weight: bold;
    color: #41348B;
  }
`

const ContentImageWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;

  @media only screen and (min-width: 1104px){
    justify-content: space-around;
  }
`

const ContentWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 1104px){
    max-width: 451px;
  }
`

const ImageWrapper = styled(ImgWrapper)`
  margin-bottom: 20px;
  width: 274px;
  height: 229px;

  @media only screen and (min-width: 1104px){
    margin-bottom: 0;
  }
`

const TitleInfo = styled.p`
  font-family: 'Oxygen';
  text-align: center;
`

const PricesWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  @media only screen and (min-width: 1104px) {
    max-width: 469px;
  }
`

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 18px;
  width: 100%;
  font-family: 'Poppins';
  font-size: 18px;  
  font-weight: 600;
  background-color: #fae6b7;
`

const PriceItemLight = styled.div`
  background-color: #e8f6fc;
`

const PriceItemDark = styled.div`
  color: white;
  background-color: #F0B21C;
`

const PriceContent = styled.p`
  min-width: 52px;
  font-family: 'Oxygen';

  & > span {
    color: #034C9B;
  }
`

const PriceContentMain = styled.p`
  font-family: 'Oxygen';
  font-size: 12px;
  font-weight: bold;
  & > span {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    color: #034C9B;

    & > span {
      color: #F0B21C;
    }
  }
`

const InfoContent = styled.p`
  font-family: 'Oxygen';
  font-size: 18px;
  line-height: 29px;
  color: #555555;
`

const Bold = styled.span`
  font-weight: 900;
  text-decoration: ${props => props.underline && 'underline'};
`;

export {
  PageWrapper,
  PageHeader,
  SubHeader,
  ParagraphOffer,
  ContentImageWrapper,
  ContentWrapper,
  ImageWrapper,
  TitleInfo,
  PricesWrapper,
  PriceItem,
  PriceItemLight,
  PriceItemDark,
  PriceContent,
  PriceContentMain,
  InfoContent,
  Bold,
};