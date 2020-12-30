import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PopUpWrapper,
  PopUpContent,
  CloseBtn,
  PopUpText,
  PopUpTitle,
  PopUpOffer,
  PopUpDiscount,
  Bold,
  PopUpCollect,
  SubmitBtn,
  ClosePopUp,
  PopUpImageWrapper,
  PopUpImage,
} from './PopUp.styled';
import { FormContext } from '../../../contexts/FormContext';
import product from '../../../assets/Desktop/SlimStick-strona2-produkt.png';

const PopUp = ({ showPopUp }) => {
  const { productRegularPackageDetails } = useContext(FormContext);
  const history = useHistory();

  const percentage = (
    ((productRegularPackageDetails.oldPrice -
      productRegularPackageDetails.discountPrice) /
      productRegularPackageDetails.oldPrice) *
    100
  ).toFixed(0);

  const submitDiscount = () => {
    history.push('/discount');
    window.scrollTo(0, 0);
  };

  return (
      <PopUpWrapper>
        <PopUpContent spaceEvenlyRow>
          <CloseBtn onClick={() => showPopUp(false)}>×</CloseBtn>
          <PopUpText column>
            <PopUpTitle>Poczekaj!</PopUpTitle>
            <PopUpOffer>Odbierz jednorazowy rabat!</PopUpOffer>
            <PopUpDiscount>
              Oferta skierowana jest <Bold>tylko do Ciebie</Bold> i za 15 minut
              wygaśnie.
            </PopUpDiscount>
            <PopUpCollect>
              By odebrać promocyjne opakowanie, wróć na stronę.
            </PopUpCollect>
            <SubmitBtn onClick={submitDiscount}>Chcę odebrać zniżkę</SubmitBtn>
            <ClosePopUp onClick={() => showPopUp(false)}>
              Nie, dziękuję
            </ClosePopUp>
          </PopUpText>
          <PopUpImageWrapper percentage={percentage}>
            <PopUpImage src={product} alt='Slimstick Patches' />
          </PopUpImageWrapper>
        </PopUpContent>
      </PopUpWrapper>
  );
};

export default PopUp;
