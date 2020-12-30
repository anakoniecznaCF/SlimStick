import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { OfferInfoItem } from './PageComponents/blocks/index';
import {FormContext} from '../../contexts/FormContext';
import { infoData } from './Data/infoData';

import {
  PageWrapper,
  PageHeader,
  SubHeader,
  ParagraphOffer,
  ContentImageWrapper,
  ContentWrapper,
  ImageWrapper,
  LinkPrimary,
  LinkSecondary,
} from './SubPageThreeRegular.styles.js';

import img_stick from './Assets/regular.png';

const offerInfo = infoData.offerInfo;

const offer = offerInfo.map((item, index) => {
  return <OfferInfoItem key={index + 'jfYTfCVc12hv'} content={item} />;
});

const SubPageThreeRegular = () => {
  const {
    setSelectedProduct,
    productRegularPackageWithCareDetails
  } = useContext(FormContext);

  const history = useHistory();

  const addCare = () => {
    setSelectedProduct(productRegularPackageWithCareDetails)
    history.push('/subpagefinal')
    window.scrollTo(0, 0);
  };
  
  const leaveWithregular = () => {
    history.push('/subpagefinal')
    window.scrollTo(0, 0);
  }

  return (
    <PageWrapper>
      <PageHeader>
        Uwaga: ważne informacje o zamówieniu <br /> [dofinansowanie!]
      </PageHeader>
      {offer}
      <SubHeader as={PageHeader}>Dlaczego warto skorzystać z oferty?</SubHeader>
      <ParagraphOffer>
        1. Pamiętaj, że zastosowanie rozszerzonej kuracji gwarantuje Ci
        osiągnięcie efektów przedstawionych na tej stronie jeszcze skuteczniej i
        to w znacznie krótszym czasie!
      </ParagraphOffer>
      <ContentImageWrapper>
        <ContentWrapper>
          <ParagraphOffer>
            2. Odbiór rozszerzonego pakietu to najwygodniejsza i najbardziej
            opłacalna opcja, która pozwala na jak najszybsze osiągnięcie
            pożądanych rezultatów (przerwa spowodowana oczekiwaniem na kolejną
            wysyłkę, która będzie kontynuacją zabiegu, może spowolnić efekty).
          </ParagraphOffer>
          <ParagraphOffer>
            3. Europejski Certyfikat Najwyższej Jakości obejmuje tylko
            rozszerzoną kurację. Decydując się na to rozwiązanie, otrzymujesz
            także profesjonalną opiekę specjalisty. Dzięki temu, jeśli z
            jakiegoś powodu efekty nie spełnią Twoich oczekiwań, otrzymasz
            dodatkowe wsparcie, w pełni dostosowane do indywidualnych potrzeb
            Twojego organizmu.
          </ParagraphOffer>
        </ContentWrapper>
        <ImageWrapper>
          <img src={img_stick} alt='slimStick'></img>
        </ImageWrapper>
      </ContentImageWrapper>
      <ParagraphOffer>
        Oferta jest ograniczona czasowo i ilościowo. W związku z tym,
        rozszerzony pakiet kuracji dostępny jest tylko dla osób, które do tej
        pory zdecydowały się na małe opakowanie (zostało tylko 6 pakietów
        promocyjnych!). Będzie aktywny tylko przez 5 minut, więc działaj szybko!
      </ParagraphOffer>
      <LinkPrimary onClick={addCare}>
        Tak, chcę skorzystać z oferty specjalnej oraz otrzymać 3 miesiące
        profesjonalnej opieki specjalisty.
      </LinkPrimary>
      <LinkSecondary onClick={leaveWithregular}>
        Nie, nie potrzebuję już gwarancji, że osiągnę swój cel.
      </LinkSecondary>
    </PageWrapper>
  );
};

export default SubPageThreeRegular;
