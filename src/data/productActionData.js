import { Title } from '../components/MainPage/Article/ThirdSection/OneAction/OneAction.styled';
import { Subtitle, OrangeText } from '../components/MainPage/blocks/index';
import img1 from '../assets/Desktop/SlimStick-strona2-dzialanie1.png';
import img2 from '../assets/Desktop/SlimStick-strona2-dzialanie2.png';
import img3 from '../assets/Desktop/SlimStick-strona2-dzialanie3.png';
import img4 from '../assets/Desktop/SlimStick-strona2-dzialanie4.png';

const productActionData = [
  {
    img: img1,
    title: (
      <Subtitle as={Title}>
        <OrangeText>Błyskawicznie spala</OrangeText> zgromadzoną tkankę
        tłuszczową
      </Subtitle>
    ),
    text:
      'Plastry odchudzające najnowszej generacji stopniowo uwalniają składniki aktywne, dlatego nie wywołują nawet najmniejszych skutków ubocznych. Przestawiają organizm w tryb intensywnego spalania tkanki tłuszczowej oraz regulują poziom gospodarki wodnej i hormonalnej organizmu.',
  },
  {
    img: img2,
    title: (
      <Subtitle as={Title}>
        Natychmiastowo <OrangeText>zmniejsza apetyt</OrangeText>
      </Subtitle>
    ),
    text:
      'Składniki aktywne oddziałują na Twoje podwzgórze, tj. część mózgu, która odpowiada za uczucie sytości. Dzięki temu doskonale hamują apetyt, a na dodatek zwiększają poziom serotoniny, czyli hormonu odpowiedzialnego za nastrój i samopoczucie oraz procesy trawienne.',
  },
  {
    img: img3,
    title: (
      <Subtitle as={Title}>
        7-krotnie przyspiesza metabolizm i{' '}
        <OrangeText>bezpowrotnie usuwa cellulit</OrangeText>
      </Subtitle>
    ),
    text:
      'Transdermalne plastry SlimStick Patches hamują działanie enzymów jelitowych, co pozwala na opóźnienie rozkładu cukrów złożonych do cukrów prostych. Plastry odchudzające blokują również wchłanianie się węglowodanów i tłuszczów, dzięki czemu tkanka tłuszczowa nie „odkłada się” w strategicznych miejscach',
  },
  {
    img: img4,
    title: (
      <Subtitle as={Title}>
        Trwale redukuje ilość zbędnych kilogramów oraz{' '}
        <OrangeText>eliminuje efekt jojo</OrangeText>
      </Subtitle>
    ),
    text:
      'Pobudza komórki ciała do wejścia na nowy, wyższy poziom pobierania energii wprost z tkanki tłuszczowej, który utrzymuje się przez wiele lat po zakończeniu kuracji. Twoja waga, wiek i przebyte choroby nie mają znaczenia – efekt jo-jo pozostanie wyłącznie wspomnieniem po dawnych i nieskutecznych dietach. Dlatego ta transdermalna metoda nazywana jest „permanentnym stabilizatorem wagi”.',
  },
];

export default productActionData;
