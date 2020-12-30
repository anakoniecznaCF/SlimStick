import styled, { css } from 'styled-components';

import { FlexWrapper } from '../../../style/StyledComponents/index';

const PopupFormWrapper = styled(FlexWrapper)`
  position: relative;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  padding: 30px 23px;
  border: 1px solid #034C9B;
  border-radius: 30px;
  background-color: #fceecf;
  box-shadow: 0 0 50px 0 #b3d7ff;

  @media only screen and (min-width: 768px) {
    max-width: 642px;
    padding: 40px 82px;
  }
`

const PopupLabel = styled.label`
  position: relative;
  margin-bottom: 10px;
  font-family: 'Oxygen';
  font-size: 18px;
  font-weight: 300;
  color: #41348B;
`

const InputsBlock = styled(FlexWrapper)`
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 232px;
  }

  & > span {
    display: ${({ errorEmail, errorPostCode, errorAddress, errorCityName, errorCountry, errorPhone, errorSurname, errorName}) => 
      errorEmail || errorPostCode || errorAddress || errorCityName || errorCountry || errorPhone || errorSurname || errorName
       ? 'block' : 'none'
    };
    color: #FF175A;
    font-size: 12px;
  }

  ${({full_width}) => 
    full_width && 
    css`
    width: ${'100%'};
  `
  }
`

const PopupInput = styled.input`
  margin-top: 4px;
  margin-bottom: 23px;
  padding: 14px;
  width: 100%;
  border: 1px solid #41348B;
  border-radius: 3px;
  outline: none;
`

const InputTextValidation = styled.span`
  position: absolute;
  right: 0;
  bottom: 4px;
`

const PromoInfo = styled.p`
  margin-bottom: 20px;
`

const DiveleryInfo = styled(PromoInfo)``


const PopupFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 60px;
  border: none;
  border-radius: 38px;
  cursor: pointer;
  outline: none;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  background-color: #034C9B;

  @media only screen and (min-width: 991px) {
    width: 232px;
  }

  ${({button_secondary}) => 
    button_secondary && 
    css`
    margin-bottom: 10px;
    color: ${ '#034C9B' };
    background-color: inherit;
    border: 1px solid ${ '#034C9B' };

    @media only screen and (min-width: 991px) {
      margin-bottom: 0;
    }
  `
  }
`

const AnswerBlock = styled(FlexWrapper)`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 29px;
  right: 5px;
  width: 30px;
  height: 30px;
  border: 1px solid ${({theme}) => theme.colors.orange};
  border-radius: 50%;
  color: ${({theme}) => theme.colors.orange};

  &:hover {
    cursor: pointer;
    &  > span {
      display: block;
    }
  }
   
`

const AnswerBlockIcon = styled.p``

const AnswerBlockInfo = styled.span`
  position: absolute;
  top: -101px;
  right: -6px;
  display: none;
  margin-bottom: 10px;
  padding: 5px;
  width: 231px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid #41348B;
  border-radius: 3px;
  background-color: white;
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

export {
  PopupFormWrapper,
  PopupLabel,
  InputsBlock,
  InputWrapper,
  PopupInput,
  InputTextValidation,
  DiveleryInfo,
  PopupFormButton,
  AnswerBlock,
  AnswerBlockIcon,
  AnswerBlockInfo,
  DeliveryIconsWrapper,
}