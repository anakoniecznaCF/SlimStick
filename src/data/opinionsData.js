import {
  AchievmentText,
  Bold,
} from '../components/MainPage/blocks/OneClientOpinion/OneClientOpinion.styled';
import imgOne from '../assets/Desktop/Group114.png';
import imgTwo from '../assets/Desktop/Group115.png';
import imgThree from '../assets/Desktop/Group113.png';
import imgFour from '../assets/Desktop/Group116.png';
import imgFive from '../assets/Desktop/Group117.png';
import imgSix from '../assets/Desktop/Group118.png';

const opinionsData = {
  firstSection: [
    {
      img: imgOne,
      title: '“Jestem taka SEXY!”',
      text:
        '„Nareszcie kocham swoje ciało. Wcześniej patrzyłam w lustro i byłam załamana, miałam dużo kompleksów. Całe moje życie odmieniło się, gdy koleżanka poleciła mi SlimStick Patches. Zamówienie transdermalnych plastrów było najlepszą decyzją w moim życiu. Schudłam aż 18,5 kg w jedyne 30 dni. Minęło już parę miesięcy, a moja waga nawet nie drgnie, cały czas utrzymuje się na tym samym perfekcyjnym poziomie. Nie czekaj dłużej, bo to naprawdę działa!”',
      name: 'Aneta z Poznania, 31 lat',
      achievment: (
        <AchievmentText>
          <Bold>zrzuciła 18,5 kg</Bold> i raz na zawsze pozbyła się cellulitu
        </AchievmentText>
      ),
    },
    {
      img: imgTwo,
      title: '“Dieta nie jest potrzebna”',
      text:
        '„Odkąd stuknęła mi 50-tka nie mogłam sobie poradzić z dodatkowymi kilogramami. Tyłam w oczach. Widziałam w biurze, jak młodsze koleżanki podśmiewają się ze mnie. Żeby jakoś wyglądać, nakupowałam bielizny obciskającej, ale oddychać w niej nie mogłam. Zaczęłam szukać rozwiązania w sieci i tak trafiłam na plastry. Codziennie naklejałam 1 plaster na brzuch i po miesiącu ważyłam już o 12 kg mniej. Żadne katowanie się dietami nie jest potrzebne.”',
      name: 'Beata z Kołobrzegu, 53 lata',
      achievment: (
        <AchievmentText>
          <Bold>zrzuciła 12,2 kg</Bold> i raz na zawsze pozbyła się problemów z
          cholestelorem
        </AchievmentText>
      ),
    },
    {
      img: imgThree,
      title: '“Plastry zmieniły moje życie”',
      text:
        '„Zaczynając kurację, zdecydowanie nie spodziewałam się cudów. Przez 2 lata przytyłam 23 kg. Mam niedoczynność tarczycy i nieważne, co jadłam, to waga i tak leciała w górę. Praktycznie co miesiąc musiałam kupować o rozmiar większe spodnie, bo nie mieściłam się w poprzednie. Bardzo łatwo się męczyłam, więc nie mogłam ćwiczyć. Wystarczyły 2 miesiące, żeby ten koszmar się skończył. Z plastrami wreszcie schudłam!”',
      name: 'Magdalena ze Słupska, 23 lata',
      achievment: (
        <AchievmentText>
          <Bold>zrzuciła 17 kg</Bold> i raz na zawsze pozbyła się kompleksów
        </AchievmentText>
      ),
    },
  ],
  fifthSection: [
    {
      img: imgFour,
      title: '“To takie proste!”',
      text:
        '„Całe dorosłe życie walczyłam z nadwagą. Głodowe diety cud, męczące ćwiczenia, wymyślne preparaty... Czasem działało, czasem nie, ale zawsze albo kilogramy wracały albo ich nawet przybywało. Czułam się źle, nie lubiłam przeglądać się w lustrze. Tak się cieszę, że zdecydowałam się na te plastry! Po tygodniu stosowania poczułam, że ubrania są luźne, a po miesiącu ubyło 15 kg! No po prostu rewelacja!”',
      name: 'Pamela z Mielna, 28 lat',
      achievment: (
        <AchievmentText>
          <Bold>zrzuciła 15 kg</Bold> i raz na zawsze pozbyła się efektu jojo
        </AchievmentText>
      ),
    },
    {
      img: imgFive,
      title: '“Wreszcie przestałam cierpieć!”',
      text:
        '"Czy kobieta z olbrzymią nadwagą może być szczęśliwa? Ja byłam chyba najsmutniejszą 34-latką w Polsce. Wstydziłam się ludzi i bałam wychodzić z własnego mieszkania... Te rewolucyjne plastry znalazłam na forum dla otyłych. Postanowiłam, że ostatni raz spróbuję. Efekt: 22 kg mniej i koniec z depresją. Gdy schudłam, nabrałam pewności siebie, a mąż jakby drugi raz się we mnie zakochał. Rewelacja!”',
      name: 'Karolina z Wrocławia, 34 lata',
      achievment: (
        <AchievmentText>
          <Bold>zrzuciła 22 kg</Bold> i raz na zawsze odzyskała radość życia
        </AchievmentText>
      ),
    },
    {
      img: imgSix,
      title: '“Już nie muszę wylewać siódmych potów nasiłowni!”',
      text:
        '“Od kilku miesięcy próbowałem poprawić sylwetkę przed komunią syna. Niestety, nie umiem zrezygnować ze schabowego i piwa, żaden facet by długo nie wytrzymał, jedząc samą sałatę i pijąc tylko wodę. W magiczne tabletki to ja nie wierzę, ale te plastry to zupełnie inna bajka. W 3 tygodnie schudłem 11,5 kg nie robiąc nic, poza przyklejeniem plastra raz dziennie. Odchudzanie nareszcie nie jest katorgą!”',
      name: 'Konrad z Białowieży, 37 lat',
      achievment: (
        <AchievmentText>
          <Bold>zrzucił 11,5 kg</Bold> i raz na zawsze odzyskał wymarzoną
          sylwetkę
        </AchievmentText>
      ),
    },
  ],
};

export default opinionsData;
