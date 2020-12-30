import styled from 'styled-components';
import { FlexWrapper, ImgWrapper, ContainerWrapper } from './style/StyledComponents/index';

const PageWrapper = styled(ContainerWrapper)`
  display: block;
  padding-top: 40px;
  padding-bottom: 40px;

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
  color: #41348B;
`;

const SubHeader = styled.h3``

const ParagraphOffer = styled.p`
  margin-bottom: 20px;
  font-family: 'Nunito Sans';
  font-size: 16px;
  line-height: 29px;
  color: #555555;

  @media only screen and (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 18px;
  }

  & > span {
    font-weight: bold;
    color: #41348B;
  }
`

const ParagraphOfferBottom = styled.p`
  & > span {
    font-weight: 400;
    text-decoration: underline;
    color: #555555;
  }
`

const ContentImageWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 1104px){
    justify-content: space-between;
  }
`

const ContentWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 1104px){
    max-width: 493px;
  }
`;
const ImageWrapper = styled(ImgWrapper)`
  width: 312px;
  height: 334px;
`

const LinkPrimary = styled.a`
  display: block;
  margin-bottom: 20px;
  padding: 12px;
  border-radius: 52px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: white;
  background-color: #034C9B;
  cursor: pointer;

  @media only screen and (min-width: 576px) {
    padding: 12px 34px;
    font-size: 18px;
  }
`
const LinkSecondary = styled.a`
  display: block;
  font-size: 16px;
  text-align: center;
  color: #555555;
  opacity: .5;
  cursor: pointer;

  @media only screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export {
  PageWrapper,
  PageHeader,
  SubHeader,
  ParagraphOffer,
  ParagraphOfferBottom,
  ContentImageWrapper,
  ContentWrapper,
  ImageWrapper,
  LinkPrimary,
  LinkSecondary,
};