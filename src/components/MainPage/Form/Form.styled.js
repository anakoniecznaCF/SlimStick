import styled from 'styled-components';
import { Background, Container, FlexWrapper } from '../blocks/index';
import background from '../../../assets/Mobile/SlimStick-strona2-header-bg.png';

export const FormSection = styled(Background)`
  background-image: url(${background});
  padding-bottom: 10rem;
  overflow: hidden;

  @media (min-width: 768px) {
    background: transparent;
  }
`;

export const FormSectionContainer = styled(Container)`
  @media (min-width: 768px) {
    width: 95%;
  }
`;

export const MobileImageWrapper = styled(FlexWrapper)`
  width: 60%;
  margin: 0 auto 2rem;
  position: relative;
  top: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  &::before {
    display: block;
    padding-top: 100%;
    content: '';
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileImage = styled.img`
  width: 110%;
  z-index: 1;
`;

export const FormContainer = styled(FlexWrapper)`
  width: 90%;
  margin-left: 0;
  padding: 2rem;
  margin: 0 1rem;
  line-height: 4.4rem;
  margin: 0 auto;

  @media (min-width: 576px) {
    width: 75%;
  }

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    margin: 0 auto;
    padding: 0;
    width: 90%;
    flex: 0 1 40%;
    margin-left: 15%;
  }
`;

export const FormStyled = styled.form`
  width: 90%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  line-height: normal;
`;

export const Label = styled.label`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: ${(props) => (props.error ? '2px solid #c33' : '1px solid #fff')};
  border-radius: 5rem;
  margin-bottom: ${(props) => (props.error ? '0' : '1rem')};
  padding: 0 2rem;
  line-height: 3.5rem;
  font-size: 1.4rem;
  padding-left: 1.2rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Arial';
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (min-width: 768px) {
    line-height: 5.6rem;
    font-size: 2rem;
  }
`;

export const SubmitButton = styled.button`
  font-size: 1.4rem;
  font-family: 'Arial';
  padding-left: 1.5rem;
  line-height: 3.5rem;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5rem;
  margin-bottom: 1.5rem;
  padding: 0.4rem 1rem;
  background: linear-gradient(90deg, #802020, #c33);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 2.15rem;
    padding: 1rem 0;
  }

  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export const Discount = styled(FlexWrapper)`
  padding: 0;
  width: 90%;
  background: linear-gradient(90deg, #ffb900, #e68700);
  border-radius: 3.5rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    flex-direction: column;
    margin: 0 auto 1rem;
  }
`;

export const Percentage = styled.p`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 900;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const PricesContainer = styled(FlexWrapper)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Price = styled.p`
  display: inline-block;
  font-size: 1rem;
`;

export const BoldPrice = styled(Price)`
  font-size: 1.4rem;
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const CanceledPrice = styled(Price)`
  position: relative;
  padding: 0 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-top: 2px solid red;
    width: 100%;
    transform: rotate(172deg);
    transform-origin: 25% 0;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const PromotionText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

export const OrangeText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 900;
`;

export const Video = styled.video`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    width: 100vw;
    object-fit: cover;
    object-position: center;
    transform: translateX(calc((100% - 100vw) / 2));
  }
`;

export const LastFormTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 900;
  line-height: 3.85rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  margin: 3.2rem 0.5rem 0.4rem;
  text-align: center;
`;

export const LastFormSection = styled(FormSection)`
  padding: 12rem 0 10rem;
  margin-top: -12rem;
`;

export const Logo = styled.img`
  width: 60%;
`;

export const Error = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.3rem;
  margin: 0.5rem auto;
  line-height: normal;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    overflow: hidden;
  }
`;

export const Bold = styled.span`
  font-weight: 400;

  @media (min-width: 768px) {
    font-weight: 900;
  }
`;

export const DesktopTitleContainer = styled(FlexWrapper)`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0 1.5rem;
`;

export const DesktopFormContainer = styled(FlexWrapper)`
  @media (min-width: 768px) {
    width: 86%;
    margin: 0 auto;
  }
`;

export const DesktopImageWrapper = styled(MobileImageWrapper)`
  display: none;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    flex: 0 1 45%;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
  }
`;

export const DesktopImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContent = styled(FlexWrapper)`
  margin-top: 3.2rem;
  padding: 0.8rem 0 1.2rem;

  & h1:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    flex: 0 1 70%;
    margin: 0;
  }
`;

export const FormTitle = styled.h1`
  width: 90%;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 2.15rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export const UpperCaseTitle = styled(FormTitle)`
  text-transform: uppercase;
`;

export const YellowText = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 900;
  text-transform: uppercase;
`;

export const BoldText = styled.span`
  font-weight: 900;
`;
