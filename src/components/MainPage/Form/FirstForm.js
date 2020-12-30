import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  FormSection,
  FormSectionContainer,
  MobileImageWrapper,
  MobileImage,
  FormContainer,
  FormStyled,
  InputWrapper,
  Label,
  Input,
  SubmitButton,
  Discount,
  Percentage,
  PricesContainer,
  BoldPrice,
  CanceledPrice,
  PromotionText,
  OrangeText,
  Video,
  Logo,
  Error,
  Bold,
  LogoWrapper,
  DesktopTitleContainer,
  DesktopFormContainer,
  DesktopImageWrapper,
  DesktopImage,
  FormContent,
  UpperCaseTitle,
  YellowText,
  BoldText,
} from './Form.styled';
import { Tooltip, FlexWrapper } from '../blocks/index';
import { FormContext } from '../../../contexts/FormContext';
import product from '../../../assets/Desktop/SlimStick-strona2-produkt.png';
import logo from '../../../assets/Desktop/SlimStick-strona2-logo-header-bottom-form.png';
import video from '../../../assets/Video/girlvideo.mp4';

const FirstForm = ({ setFormFilled }) => {
  const { register, errors, handleSubmit, formState } = useForm();
  const [showToolTip, setShowTooltip] = useState(false);
  const [counter, setCounter] = useState(30);
  const { addNameSurname, productRegularPackageDetails } = useContext(
    FormContext
  );
  const history = useHistory();

  const percentage = (
    ((productRegularPackageDetails.oldPrice -
      productRegularPackageDetails.price) /
      productRegularPackageDetails.oldPrice) *
    100
  ).toFixed(0);

  useEffect(() => {
    if(formState.dirtyFields.telephone) {
      setFormFilled(true);
    }
    const stepTime = Math.abs(Math.floor(1800000 / 27));
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, stepTime);

    if (counter === 3) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  });

  const onFirstFormSubmit = (data, e) => {
    addNameSurname(data.telephone, data.name, data.surname);
    e.target.reset();
    history.push('/subpageone');
    window.scrollTo(0, 0);
  };

  return (
    <FormSection>
      <Video src={video} loop autoPlay muted />
      <FormSectionContainer>
        <MobileImageWrapper centerRowBoth>
          <MobileImage src={product} alt='SlimStick Patches' />
        </MobileImageWrapper>
        <DesktopTitleContainer centerRowBoth>
          <LogoWrapper>
            <Logo src={logo} alt='SlimStick Patches logo' />
          </LogoWrapper>
          <FormContent centerColumnBoth>
            <UpperCaseTitle>
              Spalaj tkankę tłuszczową podczas snu! <br />
              <YellowText>
                gwarantowane rezultaty potwierdzone licznymi testami klinicznymi
              </YellowText>
            </UpperCaseTitle>
            <UpperCaseTitle>
              <BoldText>nawet 21 kg mniej w jedyna 30 dni!</BoldText>
            </UpperCaseTitle>
          </FormContent>
        </DesktopTitleContainer>
        <DesktopFormContainer centerRowBoth>
          <DesktopImageWrapper>
            <DesktopImage src={product} alt='SlimStick Patches' />
          </DesktopImageWrapper>
          <FormContainer centerColumnBoth>
            <FlexWrapper
              as={FormStyled}
              centerColumnBoth
              onSubmit={handleSubmit(onFirstFormSubmit)}
            >
              <InputWrapper>
                <Label htmlFor='telephone'>Numer telefonu</Label>
                <Input
                  name='telephone'
                  type='number'
                  placeholder='nr telefonu'
                  ref={register({ required: true, minLength: 9, maxLength: 9 })}
                  error={errors.telephone}
                />
                {errors.telephone && errors.telephone.type === 'required' && (
                  <Error>To pole jest wymagane</Error>
                )}
                {errors.telephone && errors.telephone.type === 'minLength' && (
                  <Error>Wpisz 9 cyfr</Error>
                )}
                {errors.telephone && errors.telephone.type === 'maxLength' && (
                  <Error>Wpisz 9 cyfr</Error>
                )}
                <Tooltip
                  showToolTip={showToolTip}
                  setShowTooltip={setShowTooltip}
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor='name'>Imię</Label>
                <Input
                  name='name'
                  type='text'
                  placeholder='imię'
                  ref={register({ required: true, minLength: 3 })}
                  error={errors.name}
                />
                {errors.name && errors.name.type === 'required' && (
                  <Error>To pole jest wymagane</Error>
                )}
                {errors.name && errors.name.type === 'minLength' && (
                  <Error>Wpisz poprawnie imię</Error>
                )}
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor='surname'>Nazwisko</Label>
                <Input
                  name='surname'
                  type='text'
                  placeholder='nazwisko'
                  ref={register({ required: true, minLength: 3 })}
                  error={errors.surname}
                />
                {errors.surname && errors.surname.type === 'required' && (
                  <Error>To pole jest wymagane</Error>
                )}
                {errors.surname && errors.surname.type === 'minLength' && (
                  <Error>Wpisz poprawnie nazwisko</Error>
                )}
              </InputWrapper>
              <SubmitButton type='submit'>Zamów teraz</SubmitButton>
            </FlexWrapper>
            <Discount centerRowBoth>
              <Percentage>rabat do {percentage}%</Percentage>
              <PricesContainer centerRowBoth>
                <CanceledPrice>
                  {productRegularPackageDetails.oldPrice} PLN
                </CanceledPrice>
                <BoldPrice>{productRegularPackageDetails.price} PLN</BoldPrice>
              </PricesContainer>
            </Discount>
          </FormContainer>
        </DesktopFormContainer>
        <PromotionText>
          <Bold>W promocji zostało jeszcze</Bold>&nbsp;
          <OrangeText>{counter} szt.</OrangeText>
        </PromotionText>
      </FormSectionContainer>
    </FormSection>
  );
};

export default FirstForm;
