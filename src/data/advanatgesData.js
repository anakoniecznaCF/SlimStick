import {
  Text,
  YellowText,
} from '../components/MainPage/Article/FourthSection/OneAdvantage/OneAdvantage.styled';
import img1 from '../assets/Desktop/SlimStick-strona2-bg-sekcja-dzieki-1.png';
import img2 from '../assets/Desktop/SlimStick-strona2-bg-sekcja-dzieki-2.png';
import img3 from '../assets/Desktop/SlimStick-strona2-bg-sekcja-dzieki-3.png';
import img4 from '../assets/Desktop/SlimStick-strona2-bg-sekcja-dzieki-4.png';
import img5 from '../assets/Desktop/SlimStick-strona2-bg-sekcja-dzieki-5.png';
import img6 from '../assets/Desktop/SlimStick-strona2-bg-sekcja-dzieki-6.png';

const adavantagesData = [
  {
    id: 1,
    img: img1,
    text: (
      <Text>
        <YellowText>chudniesz 24h na dobę</YellowText>
        <br /> - nieważne co właśnie robisz
      </Text>
    ),
  },
  {
    id: 2,
    img: img2,
    text: (
      <Text>
        <YellowText>zwiększysz spalanie</YellowText>
        <br /> tkanki tłuszczowej o 300%
      </Text>
    ),
  },
  {
    id: 3,
    img: img3,
    text: (
      <Text>
        <YellowText>natychmiast zmniejszysz apetyt,</YellowText>
        <br /> jednocześnie zwiększając uczucie sytości
      </Text>
    ),
  },
  {
    id: 4,
    img: img4,
    text: (
      <Text>
        <strong>7-krotnie</strong>{' '}
        <YellowText>przyspieszysz metabolizm</YellowText>
      </Text>
    ),
  },
  {
    id: 5,
    img: img5,
    text: (
      <Text>
        <YellowText>poprawisz</YellowText> sprawność fizyczną i{' '}
        <YellowText>samopoczucie</YellowText>
      </Text>
    ),
  },
  {
    id: 6,
    img: img6,
    text: (
      <Text>
        <YellowText>pozbędziesz się cellulitu</YellowText> <br /> i wymodelujesz
        sylwetkę bez efektu jojo
      </Text>
    ),
  },
];

export default adavantagesData;
