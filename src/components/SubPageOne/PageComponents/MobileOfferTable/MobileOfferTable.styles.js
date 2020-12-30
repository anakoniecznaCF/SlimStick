import styled, { css } from 'styled-components';
import { FlexWrapper, ImgWrapper } from '../../style/StyledComponents/index';

const MobileOfferWrapper = styled(FlexWrapper)`
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 40px;
  font-family: 'Nunito Sans';
  font-size: 18px;

  @media only screen and (min-width: 991px) {
    display: none;
  }
`

const TableOfferWrapper = styled(FlexWrapper)`
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #fdf7e7;
  color: #555555;

  @media only screen and (min-width: 576px) {
    width: 50%;
  }

  ${({dark}) => 
    dark && 
    css`
    background-color: ${'#fceecf'} ;
  `
  }
`

const HeaderTableOffer = styled.p`
  width: 100%;
  margin-bottom: 53px;
  padding: 5px 16px;
  text-align: center;
  background-color: #f9de9f;

  ${({dark}) => 
    dark && 
    css`
    background-color: ${'#f6cd6f'} ;
  `
  }

`

const TableImage = styled(ImgWrapper)`
  margin-bottom: 33px;
  width: 141px;
  height: 172px;
`

const TableContent = styled.p`
  margin-bottom: 20px;
  text-align: center;
`

export {
  MobileOfferWrapper,
  TableOfferWrapper,
  HeaderTableOffer,
  TableImage,
  TableContent
};