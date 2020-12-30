import {Title, Text, BoldText} from '../components/MainPage/Article/SeventhSection/OneInstruction/OneInstruction.styled';
import {OrangeText} from '../components/MainPage/blocks/index';

const howToUseData = [
  {
    title: (
      <Title>
        <OrangeText>Co</OrangeText> otrzymujesz w zestawie?
      </Title>
    ),
    text: (
      <Text>
        <BoldText>
          1 opakowanie zawiera 15 transdermalnych plastrów odchudzających
          SlimStick Patches.
        </BoldText>{' '}
        Badania kliniczne przeprowadzone przez brytyjskich specjalistów ds.
        odchudzania dowiodły ponad wszelką wątpliwość aż{' '}
        <BoldText>98,7% skuteczność</BoldText> SlimStick Patches. Naukowcy są
        zgodni –{' '}
        <BoldText>
          do tej pory na rynku nie było tak silnej broni do walki z nadwagą,
        </BoldText>{' '}
        która wyeliminowałaby zbędne kilogramy bez żadnych skutków ubocznych.
      </Text>
    ),
  },
  {
    title: (
      <Title>
        <OrangeText>Jak</OrangeText> stosować?
      </Title>
    ),
    text: (
      <Text>
        <BoldText>Przyklejaj 1-2 plastry dziennie</BoldText> - najlepiej rano i
        wieczorem.{' '}
        <BoldText>
          Składniki aktywne w nim zawarte są uwalniane przez całą dobę,
        </BoldText>{' '}
        dlatego też Twój organizm jest jak maszyna do spalania tłuszczu przez
        cały czas – zarówno w dzień, podczas pracy, jak i w nocy, podczas snu.
        Masz szansę schudnąć <BoldText>nawet 21 kg w jedyne 30 dni.</BoldText>
      </Text>
    ),
  },
];

export default howToUseData;
