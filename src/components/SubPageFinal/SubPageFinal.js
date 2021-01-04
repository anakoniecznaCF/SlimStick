import { useContext } from 'react';
import { OfferInfoItem } from './PageComponents/blocks/index';
import { infoData } from './Data/infoData';
import { FormContext } from '../../contexts/FormContext';

import sign from './Assets/Sign.png';
import postIcon from './Assets/partner-poczta.jpg';
import Inpost from './Assets/partner-inpost.jpg';
import dhl from './Assets/partner-dhl.jpg';
import dpd from './Assets/partner-dpd.jpg';
import visa from './Assets/partner-visa.jpg';
import masterCard from './Assets/partner-mastercard.jpg';
import blik from './Assets/partner-blik.jpg';

import {
  PageWrapper,
  PageHeader,
  // SubHeader,
  ContentImageWrapper,
  ImageWrapper,
  PricesWrapper,
  PriceItem,
  PriceItemLight,
  PriceItemDark,
  PriceContentMain,
  PriceContentNumber,
  PriceContentCost,
  ImageHeader,
  DeliveryIconsWrapper,
  UserInfoWrapper,
  UserInfoHeader,
  UserInfo,
  DeliveryWarranty,
  SignWrapper,
  SignImg,
  SignInfo
} from './SubPageFinal.styles.js';

const offerInfo = infoData.offerInfo;

const offer = offerInfo.map((item, index) => {
  return <OfferInfoItem key={index + 'jfYTfCVc12hv'} content={item} />;
});

const SubPageFinal = () => {
  const { selectedProduct, user, } = useContext(FormContext);

  return (
    <PageWrapper>
      <PageHeader>Drogi Kliencie,</PageHeader>
      {offer}
      <ContentImageWrapper>
        <UserInfoWrapper>
          <UserInfoHeader as={ PriceItem }><strong>Adres dostawy</strong></UserInfoHeader>
          <UserInfo>{ user.name } { user.surname }</UserInfo>
          <UserInfo>{ user.email ? user.email : '--' }</UserInfo>
          <UserInfo>{ user.country ? user.country : '--' }</UserInfo>
          <UserInfo>{ user.telephone }</UserInfo>
          <UserInfo>{ user.street ? user.street : '--'}</UserInfo>
          <UserInfo>{ user.city ? user.city : '--' }</UserInfo>
          <UserInfo>{ user.postCode ? user.postCode : '--' }</UserInfo>
        </UserInfoWrapper>
        <PricesWrapper>
          {/* <SubHeader as={PageHeader}>
            Dlaczego jest to takie opłacalne?
          </SubHeader> */}
          <PriceItem>
            <PriceContentMain>
              <strong>Szczegóły dotyczące zamówienia:</strong>
            </PriceContentMain>
            <PriceContentNumber>
              <strong>Ilość:</strong>
            </PriceContentNumber>
            <PriceContentCost>
              <strong>Cena:</strong>
            </PriceContentCost>
          </PriceItem>
          <PriceItemLight as={PriceItem}>
            <PriceContentMain>
              <strong>
                <span>Slim</span>Stick Patches
              </strong>
            </PriceContentMain>
            <PriceContentNumber>
              <span>{selectedProduct.quantity}</span>
            </PriceContentNumber>
            <PriceContentCost>
              <span>{selectedProduct.price} zł</span>
            </PriceContentCost>
          </PriceItemLight>

          <PriceItemLight as={PriceItem}>
            <PriceContentMain>
              <span>Koszty operacyjne</span>
            </PriceContentMain>
            <PriceContentNumber>
              <span>1</span>
            </PriceContentNumber>
            <PriceContentCost>
              <span>{selectedProduct.delivery} zł</span>
            </PriceContentCost>
          </PriceItemLight>

          <PriceItemLight as={PriceItem}>
            <PriceContentMain as='div'>
              <ImageHeader><strong>Podsumowanie:</strong> <br />
                <span>(bez dodatkowych kosztów otrzymujesz)</span>
              </ImageHeader>
              <ImageWrapper>
                <img src={selectedProduct.img} alt='SlimStick Patches'></img>
              </ImageWrapper>
            </PriceContentMain>
            <PriceContentNumber>
              <span>{selectedProduct.quantity}</span>
            </PriceContentNumber>
            <PriceContentCost>
              
            </PriceContentCost>
          </PriceItemLight>

          <PriceItemDark as={PriceItem}>
            <PriceContentMain>
              <span>
                <strong>Całkowita wartość zamówienia:</strong>
              </span>
            </PriceContentMain>
            <PriceContentNumber></PriceContentNumber>
            <PriceContentCost>
              <span>
                <strong>
                  {selectedProduct.price + selectedProduct.delivery} zł
                </strong>
              </span>
            </PriceContentCost>
          </PriceItemDark>
        </PricesWrapper>
      </ContentImageWrapper>
      <DeliveryWarranty>
        <strong>P.S.</strong> Zrobię wszystko co w mojej mocy, aby przesyłka dotarła do Ciebie, jak najszybciej.
      </DeliveryWarranty>
      <SignWrapper>
        <SignImg>
          <img src={ sign } alt='sign'></img>
        </SignImg>
        <SignInfo>
          <strong>Z poważaniem, </strong>
          Manager BOK
        </SignInfo>
      </SignWrapper>
      <DeliveryIconsWrapper>
        <img src={postIcon} alt='poczta polska'></img>
        <img src={Inpost} alt='Inpost'></img>
        <img src={dhl} alt='DHL'></img>
        <img src={dpd} alt='DPD'></img>
        <img src={visa} alt='visa'></img>
        <img src={masterCard} alt='masterCard'></img>
        <img src={blik} alt='blik'></img>
      </DeliveryIconsWrapper>
    </PageWrapper>
  );
};

export default SubPageFinal;
