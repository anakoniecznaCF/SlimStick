import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { OfferInfoItem } from './PageComponents/blocks/index';
import DesktopOfferTable from './PageComponents/DesktopOfferTable/DesktopOfferTable.js';
import MobileOfferTable from './PageComponents/MobileOfferTable/MobileOfferTable.js';
import {FormContext} from '../../contexts/FormContext';
import { infoData } from './Data/infoData';

import {
  PageWrapper,
  PageHeader,
  SubHeader,
  ParagraphOffer,
  LinkPrimary,
  LinkSecondary,
  ParagraphOfferCenter,
} from './SubPageOne.styles.js';

import img_stick1 from './Assets/regular_2.png';
import img_stick2 from './Assets/regular.png';

const offerInfo = infoData.offerInfo;

const offer = offerInfo.map((item, index) => {
  return <OfferInfoItem key={index + 'jfYTfCVc12hv'} content={item} />;
});

const SubPageOne = () => {
  const { setSelectedProduct, productBigPackageDetails, productRegularPackageDetails  } = useContext(FormContext);
  const history = useHistory();

  const addProductBigPackage = () => {
    setSelectedProduct(productBigPackageDetails)
    history.push('/subpageform');
    window.scrollTo(0, 0);
  };

  const addProductRegularPackage = () => {
    setSelectedProduct(productRegularPackageDetails)
    history.push('/subpageform');
    window.scrollTo(0, 0);
  };

  return (
    <PageWrapper>
      <PageHeader>
        <span>SLIM</span>STICK PATCHES
      </PageHeader>
      <SubHeader as={PageHeader}>
        Przed przejściem do następnego kroku...
      </SubHeader>
      <ParagraphOfferCenter as={ParagraphOffer}>
        …odpowiedz na bardzo ważne pytanie:
      </ParagraphOfferCenter>
      <SubHeader as={PageHeader}>Masz ponad 30 lat?</SubHeader>
      <ParagraphOfferCenter as={ParagraphOffer}>
        Jeśli Twoja odpowiedź brzmi <strong>„TAK”</strong>, czytaj dalej:
      </ParagraphOfferCenter>
      {offer}
      <SubHeader as={PageHeader}>Dlaczego to się opłaca?</SubHeader>

      <MobileOfferTable img1={img_stick1} img2={img_stick2} />
      <DesktopOfferTable img1={img_stick1} img2={img_stick2} />

      <ParagraphOfferCenter as={ParagraphOffer}>
        <strong>
          Zmień mniejsze opakowanie na większe, które jest bardziej opłacalne!
          Dzięki temu zbędne kilogramy będą spadać jeszcze skuteczniej i to w
          znacznie szybszym tempie.
        </strong>
      </ParagraphOfferCenter>
      <LinkPrimary onClick={addProductBigPackage}>
        TAK, wybieram DUŻE opakowanie.
      </LinkPrimary>
      <LinkSecondary onClick={addProductRegularPackage}>
        NIE, wybieram małe opakowanie.
      </LinkSecondary>
    </PageWrapper>
  );
};

export default SubPageOne;
