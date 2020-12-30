import {
  EightSectionBackground,
  EightSectionWrapper,
  EightSectionSubtitle,
  Content,
  ImageWrapper,
  ImageWrapperCertificate,
  Image,
  Text,
  TextWrapper,
} from './EightSection.styled';
import { OrangeText } from '../../blocks/index';
import certificateTitle from '../../../../assets/Desktop/certificate-title.png';
import certificate from '../../../../assets/Desktop/certificate.png';

const EightSection = () => {
  return (
    <EightSectionBackground>
      <EightSectionWrapper>
        <EightSectionSubtitle>
          Skorzystaj z rewolucyjnego sposobu utraty wagi{' '}
          <OrangeText>SlimStick Patches bez żadnego ryzyka</OrangeText>
        </EightSectionSubtitle>
        <Content>
          <TextWrapper>
            <ImageWrapper>
              <Image src={certificateTitle} alt='Certificate title' />
            </ImageWrapper>
            <Text>
              Ten unikalny produkt został objęty Europejską Gwarancją Najwyższej
              Jakości. To certyfikat przyznawany innowacyjnym rozwiązaniom,
              które stale przyczyniają się do rozwoju najnowszych technologii.
              Sekretarz i Prezes Zarządu Europejskiej Kapituły Jakości i
              Skuteczności przyznają go jedynie formułom i produktom poddanym
              serii rygorystycznych badań klinicznych. To międzynarodowe
              wyróżnienie potwierdza wysoką skuteczność i bezpieczeństwo
              użytkowania kuracji.
            </Text>
          </TextWrapper>
          <ImageWrapperCertificate>
            <Image src={certificate} alt='certificate' />
          </ImageWrapperCertificate>
        </Content>
      </EightSectionWrapper>
    </EightSectionBackground>
  );
};

export default EightSection;
