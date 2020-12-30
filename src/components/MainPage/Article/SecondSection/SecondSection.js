import { useState } from 'react';
import {
  SecondSectionBackground,
  SecondSectionWrapper,
  SecondSectionSubtitle,
  Content,
  ImageWrapper,
  Image,
  DoctorName,
  DoctorTitle,
  DoctorPosition,
  DoctorTextTitle,
  DoctorText,
  Button,
  Bold,
  TextContent,
  DoctorContent,
} from './SecondSection.styled';
import doctor from '../../../../assets/Desktop/SlimStick-strona2-doktor.png';

const SecondSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <SecondSectionBackground>
      <SecondSectionWrapper>
        <SecondSectionSubtitle>
          SlimStick Patches polecane przez cenionych specjalistów w dziedzinie
          odchudzania
        </SecondSectionSubtitle>
        <Content centerColumnBoth>
          <DoctorContent>
            <ImageWrapper>
              <Image src={doctor} alt='Mariusz Rogala portrait photography' />
            </ImageWrapper>
            <DoctorName>
              <DoctorTitle>dr hab.</DoctorTitle> <Bold>Mariusz Rogala</Bold>
            </DoctorName>
            <DoctorPosition>
              dietetyk z 15-letnim doświadczeniem, naukowiec
            </DoctorPosition>
          </DoctorContent>
          <TextContent>
            <div>
              <DoctorTextTitle>Dzień dobry,</DoctorTextTitle>
              <DoctorText>
                nazywam się Mariusz Rogala i od ponad 15 lat prowadzę prywatny
                gabinet w Lublinie, w którym codziennie przyjmuję dziesiątki
                osób zmagających się z nadprogramowymi kilogramami, złym
                cholesterolem i brakiem energii. Do każdej ze zgłaszających się
                do mnie osób, podchodzę w indywidualny sposób, dopasowując dietę
                do wieku, choroby i innych ważnych czynników mających wpływ na
                wagę.
              </DoctorText>
            </div>
            <Button onClick={() => setShowMore(!showMore)}>Czytaj dalej</Button>
            {showMore && (
              <div>
                <DoctorText>
                  Teraz jest to już jednak nieistotne, w jakim jesteś wieku,
                  gdzie mieszkasz i ile ważysz. Jeżeli to właśnie czytasz, to
                  znaczy, że od wymarzonej figury dzieli Cię zaledwie jeden
                  krok!
                </DoctorText>
                <DoctorText>
                  Pewnego dnia w moim gabinecie pojawił się pacjent, na którego
                  nie działały żadne diety. Znajoma poleciła mu plastry
                  transdermalne, które postanowił mi pokazać i zapytać, czy aby
                  na pewno nie pogorszą jego i tak kiepskiej sytuacji.
                </DoctorText>
                <DoctorText>
                  Zaintrygowany szukałem informacji dotyczących tej rewolucyjnej
                  metody. W końcu trafiłem na sprawozdanie z konferencji
                  naukowej "Odchudzanie na miarę XXI wieku", która odbyła się w
                  renomowanym ośrodku ds. prawidłowego żywienia w Genewie.
                  Opisywano tam działanie tej transdermalnej formuły. Okazuje
                  się, że w pełni naturalne składniki zawarte w plastrach
                  odchudzających wpływają na gospodarkę wodną organizmu oraz
                  rozbijają zgromadzoną na brzuchu, udach, pośladkach czy innych
                  częściach ciała tkankę tłuszczową. Składniki aktywne zawarte w
                  plastrach działają przez 24/h na dobę i przenikają przez skórę
                  właściwą, co pozwala na nawet 7 - krotne przyspieszenie
                  metabolizmu, zwiększenie energii i wigoru, a w konsekwencji na
                  trwałe pozbycie się zbędnych kilogramów. Od tego czasu polecam
                  te plastry wszystkim moim pacjentom i z dnia na dzień
                  przekonuje się do tego, że plastry transdermalne SlimStick
                  Patches to najlepsze rozwiązanie dla osób chcących odzyskać
                  młodzieńczą sylwetkę.
                </DoctorText>
                <DoctorText>
                  Z poważaniem <br /> <Bold>dr hab. Mariusz Rogala</Bold>
                </DoctorText>
              </div>
            )}
          </TextContent>
        </Content>
      </SecondSectionWrapper>
    </SecondSectionBackground>
  );
};

export default SecondSection;
