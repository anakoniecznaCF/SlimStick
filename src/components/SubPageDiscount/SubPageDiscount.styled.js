import styled from 'styled-components';
import {FlexWrapper} from '../MainPage/blocks/index';

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
  top: 0;
  left: 0;
`;

export const DiscountWrapper = styled(FlexWrapper)`
  min-height: 100vh;
  max-width: 540px;
  margin: 0 auto;
  padding: 20px 40px;
  font-family: 'Fira Sans', sans-serif;

  @media (min-width: 768px) {
    box-shadow: 1px 1px 13px 0 rgba(0, 0, 0, 0.3);
    margin: 50px auto;
  }

  @media (min-width: 992px) {
    max-width: 720px;
  }
`;

export const DiscountTitle = styled.h1`
  color: ${({theme}) => theme.colors.blue};
  font-size: 30px;
  margin-bottom: 1rem;
  font-weight: 400;
  text-align: center;
`;

export const DiscountTimerText = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const DiscountTimer = styled.p`
  color: ${({theme}) => theme.colors.orange};
  font-size: 52px;
  min-height: 78px;
  text-align: center;
`;

export const PromotionOver = styled.span`
  line-height: normal;
`;

export const DiscountPromo = styled.div`
  margin: 0 auto 30px;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DiscountPrice = styled.div`
  padding: 20px 0;
`;

export const OldPrice = styled.p`
  font-size: 18px;
  text-decoration: line-through;
`;

export const NewPrice = styled.p`
  font-size: 20px;
`;

export const NewPriceOrange = styled.p`
  font-size: 22px;
  color: ${({theme}) => theme.colors.orangeNewPrice};
`;

export const DiscountImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`;

export const DiscountText = styled.p`
  font-size: 14px;
  color: ${({theme}) => theme.colors.darkGrey};
  margin-bottom: 1rem;
  line-height: normal;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DiscountFirstForm = styled.form`
  margin: 30px auto;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 380px;
  }

  @media (min-width: 992px) {
    max-width: 510px;
  }
`;

export const DiscountFirstFormTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 1rem;
  color: #004899;
  text-align: left;
  font-weight: 400;
`;

export const DiscountInputWrapper = styled.div`
  position: relative;
  margin-bottom: ${(props) => (props.info ? '0' : '20px')};

  &::before {
    display: ${(props) => (props.required ? 'block' : 'none')};
    content: '*';
    position: absolute;
    color: ${({theme}) => theme.colors.red};
    left: -15px;
    font-size: 20px;
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 30px auto;
  }
`;

export const DiscountLabel = styled.label`
  font-size: 18px;
  color: ${({theme}) => theme.colors.darkGrey};
  margin: 0;
  text-align: left;

  @media (min-width: 992px) {
    width: 25%;
    line-height: 20px;
  }
`;

export const DiscountInput = styled.input`
  width: 100%;
  border: 1px solid #d6d4d4;
  border-radius: 4px;
  color: ${({theme}) => theme.colors.lightBlack};
  font-size: 15px;
  font-weight: 400;
  padding: 8px 10px;

  &::placeholder {
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    width: ${(props) => (props.info ? '100%' : '70%')};
  }
`;

export const DiscountToolTip = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 38.33px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.lighterGrey};
  border-radius: 50%;
  transform: translate(-10px, -50%);
  color: ${({theme}) => theme.colors.seaBlue};
  font-weight: 700;
  cursor: help;

  font-size: 14px;

  @media (min-width: 992px) {
    top: 17.32px;
  }
`;

export const DiscountToolTipText = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 290px;
  border-radius: 10px;
  color: ${({theme}) => theme.colors.lightBlack};
  padding: 5px;
  height: 155px;
  background-color: ${({theme}) => theme.colors.lightestGrey};
  border: 1px solid #000;
  bottom: 70%;
  right: -10%;
  line-height: normal;
`;

export const DiscountError = styled.div`
  position: absolute;
  color: ${({theme}) => theme.colors.red};
  bottom: -22px;
  right: 0;
  font-size: 12px;
  width: 230px;
  -moz-text-align-last: right;
  text-align-last: right;
`;

export const DiscountSubmitButton = styled.button`
  width: 100%;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  background: ${({theme}) => theme.colors.darkerBlue};
  border: none;
  outline: none;
  padding: 20px 10px;
  margin-top: 30px;
  color: ${({theme}) => theme.colors.lightestBlue};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const DiscountHiddenForm = styled.form`
  margin: 0 auto 30px;
  max-width: 300px;

  @media (min-width: 768px) {
    max-width: 380px;
  }

  @media (min-width: 992px) {
    max-width: 510px;
  }
`;

export const DiscountPartnersContainer = styled.div`
  background-color: ${({theme}) => theme.colors.lightYellow};
  border: 1px solid #000;
  margin: 15px 0;
  padding: 10px;
`;

export const PartnersText = styled.p`
  margin: 15px;
  width: 90%;
  font-size: 14px;
  text-align: left;
  line-height: normal;
`;

export const DiscountInfo = styled.span`
  font-size: 14px;
  color: ${({theme}) => theme.colors.darkGrey};
`;

export const InfoInputWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
`;
