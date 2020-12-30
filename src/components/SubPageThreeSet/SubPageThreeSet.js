import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { OfferInfoItem } from './PageComponents/blocks/index';
import { infoData } from './Data/infoData';
import { FormContext } from '../../contexts/FormContext';

import {
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
} from './SubPageThreeSet.styles.js';

import img_bottle from './Assets/zestaw.png';

const offerInfo = infoData.offerInfo;

const offer = offerInfo.map((item, index) => {
  return <OfferInfoItem key={index + 'jfYTfCVc12hv'} content={item} />;
});

const SubPageThreeRegular = () => {
  const { setSelectedProduct, productSetPackageWithCareDetails } = useContext(
    FormContext
  );

  const history = useHistory();

  const addCare = () => {
    setSelectedProduct(productSetPackageWithCareDetails);
    history.push('/subpagefinal');
    window.scrollTo(0, 0);
  };

  const leaveWithBig = () => {
    history.push('/subpagefinal');
    window.scrollTo(0, 0);
  };

  return (
    <PageWrapper>
      <PageHeader>
        Uwaga: ważne informacje dotyczące Twojego <br /> zamówienia
        [dofinansowanie!]
      </PageHeader>
      {offer}
      <SubHeader as={PageHeader}>Dlaczego to jest takie opłacalne?</SubHeader>
      <ParagraphOffer>
        Dzięki dofinansowaniu i tylko niewielkiej dopłacie (dofinansowanie 88%
        ceny podstawowej!) wraz z zamówieniem otrzymasz dodatkowe opakowanie
        SlimStick Patches.
      </ParagraphOffer>
      <ContentImageWrapper>
        <ContentWrapper>
          <ParagraphOffer>
            Dzięki temu zyskujesz gwarancję efektów, nawet jeśli należysz do
            grona osób najbardziej odpornych na wpływ tej biomedycznej formuły.
          </ParagraphOffer>
          <ParagraphOffer>
            <strong>Dlatego jeśli:</strong>
          </ParagraphOffer>
          <ParagraphOffer>
            1. Chcesz wreszcie poczuć ulgę, uzyskać idealną wagę i czuć się
            dobrze w swoim ciele,
          </ParagraphOffer>
          <ParagraphOffer>
            2. Wielokrotnie testowałeś różne metody, ale nie osiągnąłeś na stałe
            oczekiwanych rezultatów,
          </ParagraphOffer>
          <ParagraphOffer>
            3. Ze względu na stres i zmiany życiowe, nie możesz poczuć pełni
            efektów kuracji…
          </ParagraphOffer>
        </ContentWrapper>
        <ImageWrapper>
          <img src={img_bottle} alt='small bottle'></img>
        </ImageWrapper>
      </ContentImageWrapper>
      <ParagraphOffer>
        ...skorzystaj z tej dodatkowej promocji, która pozwoli Ci na zawsze
        skutecznie wyeliminować irytujący problem.
      </ParagraphOffer>
      <SubHeader as={PageHeader}>Ale to nie wszystko!</SubHeader>
      <ParagraphOfferBottom as={ParagraphOffer}>
        Dzięki dofinansowaniu otrzymujesz również{' '}
        <strong>profesjonalne wsparcie specjalisty na okres 3 miesięcy</strong>.
      </ParagraphOfferBottom>
      <ParagraphOfferBottom as={ParagraphOffer}>
        Dzięki temu, <span>jeśli efekty kuracji Cię nie zadowolą</span>,{' '}
        <strong>otrzymasz profesjonalną pomoc!</strong> Naszym zadaniem będzie
        dostosowanie lub zmodyfikowanie leczenia tak, aby jak najszybciej
        osiągnąć Twoje cele. Bez stresu i przemęczenia!.
      </ParagraphOfferBottom>
      <ParagraphOfferBottom as={ParagraphOffer}>
        Niestety liczba osób, które otrzymają dofinansowanie jest ograniczona i
        (ze względu na duże zainteresowanie) bardzo szybko maleje. Jeśli więc
        chcesz otrzymać dodatkowe opakowanie i wsparcie specjalisty,{' '}
        <strong>działaj natychmiast..</strong>
      </ParagraphOfferBottom>
      <LinkPrimary onClick={addCare}>
        Tak, chcę skorzystać ze specjalnego dofinansowania i otrzymać 2 duże
        opakowania oraz gratis 3 miesiące profesjonalnej opieki specjalisty
      </LinkPrimary>
      <LinkSecondary onClick={leaveWithBig}>
        Nie, nie potrzebuję już gwarancji, że osiągnę swój cel.
      </LinkSecondary>
    </PageWrapper>
  );
};

export default SubPageThreeRegular;
