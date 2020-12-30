import {
  FooterStyled,
  PartnersContainer,
  PartnersList,
  Image,
  LinksContainer,
  Links,
  Link,
  Copyrights,
} from './Footer.styled';
import { FlexWrapper, SecondBar } from '../blocks/index';
import dhl from '../../../assets/Desktop/SlimStick-strona2-partnerzy-dhl.png';
import dpd from '../../../assets/Desktop/SlimStick-strona2-partnerzy-dpd.png';
import inpost from '../../../assets/Desktop/SlimStick-strona2-partnerzy-InPost.png';
import poczta from '../../../assets/Desktop/SlimStick-strona2-partnerzy-poczta-polska.png';
import visa from '../../../assets/Desktop/SlimStick-strona2-partnerzy-visa.png';
import mastercard from '../../../assets/Desktop/SlimStick-strona2-partnerzy-mastercard.png';

const Footer = ({innerRef}) => {
  return (
    <FooterStyled ref={innerRef}>
      <SecondBar />
      <PartnersContainer>
        <FlexWrapper as={PartnersList} spaceAroundRow>
          <li>
            <div>Nasi partnerzy</div>
          </li>
          <li>
            <Image src={dhl} alt='dhl logo' />
          </li>
          <li>
            <Image src={dpd} alt='dpd logo' />
          </li>
          <li>
            <Image src={inpost} alt='inpost logo' />
          </li>
          <li>
            <Image src={poczta} alt='poczta logo' />
          </li>
          <li>
            <Image src={visa} alt='visa logo' />
          </li>
          <li>
            <Image src={mastercard} alt='mastercard logo' />
          </li>
        </FlexWrapper>
      </PartnersContainer>
      <LinksContainer>
        <Links>
          <Link href='/'>Polityka prywatności</Link>
          <Link href='/'>Cookies</Link>
          <Link href='/'>Mapa strony</Link>
        </Links>
        <Copyrights>© 2020 Copyright. All rights reserved</Copyrights>
      </LinksContainer>
    </FooterStyled>
  );
};

export default Footer;
