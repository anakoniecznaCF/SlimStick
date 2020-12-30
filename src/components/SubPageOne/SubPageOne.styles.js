import styled from 'styled-components';
import { ContainerWrapper } from './style/StyledComponents/index';

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
  font-family: 'Oxygen';
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  line-height: 66px;
  color: #034C9B;

  & > span {
    color: #F0B21C;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  } 
`;

const SubHeader = styled.h3`
  margin-bottom: 10px;
  font-family: 'Nunito Sans';
  font-size: 32px;
  line-height: 40px;
`

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

const ParagraphOfferCenter = styled.p`
  margin-bottom: 40px;
  text-align: center;
`

const LinkPrimary = styled.a`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 12px;
  width: 100%;
  max-width: 372px;
  border-radius: 52px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: white;
  background-color: #004B9B;
  cursor: pointer;


  @media only screen and (min-width: 576px) {
    padding: 12px 40px;
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
  LinkPrimary,
  LinkSecondary,
  ParagraphOfferCenter
};