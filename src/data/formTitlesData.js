import {
  FormContent,
  FormTitle,
  UpperCaseTitle,
  YellowText,
  BoldText,
} from '../components/MainPage/Form/Form.styled';

const formData = {
  firstFormTitle: (
    <FormContent centerColumnBoth>
      <UpperCaseTitle>
        Spalaj tkankę tłuszczową podczas snu! <br />
        <YellowText>
          gwarantowane rezultaty potwierdzone licznymi testami klinicznymi
        </YellowText>
      </UpperCaseTitle>
      <UpperCaseTitle>
        <BoldText>nawet 21 kg mniej w jedyna 30 dni!</BoldText>
      </UpperCaseTitle>
    </FormContent>
  ),
  lastFormTitle: (
    <FormContent centerColumnBoth>
      <FormTitle>
        <YellowText>Rozpocznij 24 godzinny proces odchudzania</YellowText>,
        wypełnij krótki formularz i ciesz się{' '}
        <YellowText>idealnym ciałem!</YellowText>
      </FormTitle>
      <FormTitle>
        Zamów teraz, a <YellowText>zaoszczędzisz 160 zł</YellowText> i otrzymasz{' '}
        <YellowText>darmową przesyłkę</YellowText>. Oferta ważna do końca dnia
        lub do wyczerpania zapasów!
      </FormTitle>
    </FormContent>
  ),
};

export default formData;
