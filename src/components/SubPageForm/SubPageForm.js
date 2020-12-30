import { useContext } from 'react';
import { OfferInfoItem, FormComponent } from './PageComponents/blocks/index';
import { FormContext } from '../../contexts/FormContext';
import { infoData } from './Data/infoData';

import {
  PageWrapper,
  PageHeader,
  SubHeader,
  ParagraphOffer,
  ContentImageWrapper,
  ImageWrapper,
  TitleInfo,
  PricesWrapper,
  PriceItem,
  PriceItemLight,
  PriceItemDark,
  PriceContent,
  PriceContentMain,
  InfoContent,
  Bold,
} from './SubPageForm.styles.js';

import img_stick from './Assets/regular.png';

const offerInfo = infoData.offerInfo;

const offer = offerInfo.map((item, index) => {
  return <OfferInfoItem key={index + 'jfYTfCVc12hv'} content={item} />;
});

const SubPageThreeRegular = () => {
  const { selectedProduct } = useContext(FormContext);

  return (
    <PageWrapper>
      <PageHeader>Dzięki za cierpliwość, to już ostatni krok!</PageHeader>
      <TitleInfo as={ParagraphOffer}>
        Twoje zamówienie zostało właśnie zarejestrowane w systemie. W ciągu
        kilku godzin skontaktuje się z Tobą wykfalifikowany pracownik Biura
        Obsługi Klienta w celu realizacji zamówienia.
      </TitleInfo>
      <SubHeader as={PageHeader}>Podsumowanie zamówienia</SubHeader>
      <ContentImageWrapper>
        <ImageWrapper>
          <img src={img_stick} alt='small bottle'></img>
        </ImageWrapper>
        <PricesWrapper>
          <PriceItem>
            <PriceContentMain as={PriceContent}>
              <span>
                <span>Slim</span>Stick Patches
              </span>{' '}
              w promocyjnej cenie:
            </PriceContentMain>
            <PriceContent>
              <span>{selectedProduct.price} zł</span>
            </PriceContent>
          </PriceItem>
          <PriceItemLight as={PriceItem}>
            <PriceContent>Dostawa</PriceContent>
            <PriceContent>
              <span>{selectedProduct.delivery} zł</span>
            </PriceContent>
          </PriceItemLight>
          <PriceItemDark as={PriceItem}>
            <PriceContent>Podsumowanie</PriceContent>
            <PriceContent>
              {selectedProduct.price + selectedProduct.delivery} zł
            </PriceContent>
          </PriceItemDark>
        </PricesWrapper>
      </ContentImageWrapper>
      <InfoContent>
        <Bold>Ważna informacja:</Bold> w ciągu najbliższych 15 sekund{' '}
        <Bold underline>bez dodatkowych kosztów</Bold>{' '}
        możesz własnoręcznie dodać adres na który ma być wysłana paczka i nadać
        jej priorytet. Dzięki temu Twoje zamówienie zostanie wysłane jako
        pierwsze i będziesz mógł przekonać się o efektach użytkowania produktu
        jeszcze szybciej!
      </InfoContent>
      <SubHeader as={PageHeader}>Jak to zrobić?</SubHeader>
      {offer}
      <FormComponent />
    </PageWrapper>
  );
};

export default SubPageThreeRegular;
