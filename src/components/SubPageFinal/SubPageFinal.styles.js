import styled from 'styled-components';
import { FlexWrapper, ImgWrapper, ContainerWrapper } from './style/StyledComponents/index';
import parcel from './Assets/parcel.png';

const PageWrapper = styled(ContainerWrapper)`
  display: block;
  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

const PageHeader = styled.h1`
  position: relative;
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: 'Nunito Sans';
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: #034C9B;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40px;
    height: 43px;
    background-image: url(${parcel});
    background-size: contain;

    @media only screen and (min-width: 1104px) {
      width: 68px;
      height: 73px;
    }
  }
`;

const SubHeader = styled.h3`
  &::before {
    content: '';
    width: 0;
    height: 0;
  }
`

const ContentImageWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #41348B;

  @media only screen and (min-width: 1104px){
    align-items: flex-start;
    justify-content: space-around;
    padding-top: 40px;
  }
`

const ImageWrapper = styled(ImgWrapper)`
  margin-bottom: 20px;
  width: 227px;
  height: 198px;

  @media only screen and (min-width: 1104px){
    margin-bottom: 0;
  }
`

const PricesWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  @media only screen and (min-width: 1104px) {
    max-width: 560px;
  }
`

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 18px;
  width: 100%;
  font-family: 'Poppins';
  font-size: 18px; 
  background-color: #F0B21C;
  color: #555555;
`

const PriceItemLight = styled.div`
  border-bottom: 1px solid #034C9B;
  color: #555555;
  background-color: white;
`

const PriceItemDark = styled.div`
  color: #555555;
  background-color: white;
`

const PriceContentMain = styled.p`
  min-width: 130px;
  font-size: 14px; 

  & > strong {
    color: #034C9B;
    & > span {
      color: #F0B21C;
    }
  }

  @media only screen and (min-width: 375px) {
    min-width: 180px;
    font-size: 18px; 
  }

  @media only screen and (min-width: 620px) {
    min-width: 349px;
    font-size: 18px; 
  }
`

const PriceContentNumber = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  min-width: 52px;
  font-size: 14px;
  color: #034C9B;

  & > span {
    color: #555555;
  }

  @media only screen and (min-width: 620px) {
    font-size: 18px; 
    min-width: 100px;
  }
`

const ImageHeader = styled.p`
  margin-bottom: 10px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #034C9B;

  & > span {
    font-size: 16px;
    text-transform: lowercase;
  }
`

const PriceContentCost = styled.p`
  min-width: 52px;
  font-size: 14px;
  color: #034C9B;

  & > span {
    color: #555555;
  }

  @media only screen and (min-width: 620px) {
    font-size: 18px; 
    min-width: 100px;
  }
`

const DeliveryIconsWrapper = styled(FlexWrapper)`
  width: 100%;
  margin-top: 40px;
  justify-content: space-around;

  @media only screen and (min-width: 576px) {
    margin-top: 80px;
    justify-content: space-between;
  }

  & > img {
    margin: 2px;
    margin-bottom: 7px;
    width: 80px;
    box-shadow: 3px 2px 4px 0 #b3d7ff;

    @media only screen and (min-width: 576px) {
      width: 106px;
      height: 68px;
    }
  }
`

const UserInfoWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media only screen and (min-width: 1104px){
    margin-top: 60px;
    margin-bottom: 0;
    width: 400px;
  }
`

const UserInfoHeader = styled.p`
  padding: 16px 18px;
  color: #034C9B;
`

const UserInfo = styled.p`
  margin-top: 10px;
  padding-left: 18px;
  color: #034C9B;
`

const DeliveryWarranty = styled.p`
  margin-top: 24px;
  width: 100%;
  color: #034C9B;

  @media only screen and (min-width: 576px) {
    margin-top: 48px;
  }
`

const SignWrapper = styled(FlexWrapper)`
  flex-direction: column;
  align-items: flex-end;
  margin-top: 18px;
`

const SignImg = styled(ImgWrapper)`
  width: 176px;

  @media only screen and (min-width: 576px) {
    width: 232px;
    height: 91px;
  }
`
const SignInfo = styled.p`
  max-width: 150px;
  text-align: end;
  color: #034C9B;

  @media only screen and (min-width: 576px) {
    max-width: 163px;
    font-size: 18px;
  }
`

export {
  PageWrapper,
  PageHeader,
  SubHeader,
  ContentImageWrapper,
  ImageWrapper,
  PricesWrapper,
  PriceItem,
  PriceItemLight,
  PriceItemDark,
  PriceContentMain,
  PriceContentNumber,
  PriceContentCost,
  ImageHeader,
  DeliveryIconsWrapper,
  UserInfoWrapper,
  UserInfoHeader,
  UserInfo,
  DeliveryWarranty,
  SignWrapper,
  SignImg,
  SignInfo
};