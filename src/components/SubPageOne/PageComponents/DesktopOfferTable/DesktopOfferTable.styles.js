import styled, { css } from 'styled-components';
import { FlexWrapper, ImgWrapper } from '../../style/StyledComponents/index';

const fullWidth = '100%';

const DesktopOfferWrapper = styled.div`
  display: none;
  font-size: 18px;

  @media only screen and (min-width: 991px) {
    display: block;
    margin-bottom: 32px;
    width: 806px;
  }
`

const ContentOfferWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f9de9f;
  color: #555555;

  ${({light}) => 
    light && 
    css`
    background-color: ${'#fdf7e7'} ;
  `
  }
`

const LeftSideOfferWrapper  = styled(FlexWrapper)`
  width: 542px;
`
const RightSideOfferWrapper  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  background-color: #f6cd6f;

  ${({light}) => 
    light && 
    css`
    background-color: ${'#fceecf'} ;
  `}
`

const OfferContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 50%;
  font-family: 'Nunito Sans';

  & > strong {
    padding-left: 2px;
  }

  ${({column}) => 
    column && 
    css`
    flex-direction: column;
  `}

  ${({full_width}) => 
    full_width && 
    css`
    width: ${fullWidth};
  `}
`

const OfferImageWrapper = styled(ImgWrapper)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 163px;
  height: 198px;

  ${({secondary_margin}) => 
    secondary_margin && 
    css`
    transform: translateX(-30%);
  `}
`
export {
  DesktopOfferWrapper,
  ContentOfferWrapper,
  LeftSideOfferWrapper,
  RightSideOfferWrapper,
  OfferContent,
  OfferImageWrapper,
};