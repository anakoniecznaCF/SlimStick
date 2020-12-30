import { BoldComponent } from '../PageComponents/blocks/index';

const infoData = {
  offerInfo: [
    <BoldComponent>
      1. Sprawdź, czy dane wpisane w formularzu są poprawne i{' '}
      <strong>
        uzupełnij je o adres na który ma zostać wysłana przesyłka.
      </strong>{' '}
    </BoldComponent>,
    <BoldComponent>
      2. Jeśli zobaczysz błąd we wpisanych wcześniej danych,{' '}
      <strong>po prostu kliknij przycisk „POPRAW”.</strong>
    </BoldComponent>,
    <BoldComponent>
      3. Nanieś ewentualne poprawki i{' '}
      <strong>kliknij przycisk „ZATWIERDŹ”!</strong> W ciągu kilku chwil Twoje
      zamówienie zostanie wysłane priorytetem.
    </BoldComponent>,
    'Cały proces weryfikacji danych i priorytetyzacji wysyłki zajmuje około 5 sekund. Za tę usługę nie musisz nic płacić, a jest ona jedną z najczęściej wybieranych przez naszych Klientów.',
    <BoldComponent>
      Jeśli zdecydujesz się skorzystać z tej opcji, potwierdź (lub popraw) dane{' '}
      <strong>w ciągu następnych 5 minut.</strong>
    </BoldComponent>,
  ],
};

export { infoData };
