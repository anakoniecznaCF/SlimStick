import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  DiscountFirstForm,
  DiscountFirstFormTitle,
  DiscountInputWrapper,
  DiscountLabel,
  DiscountInput,
  DiscountToolTip,
  DiscountToolTipText,
  DiscountError,
  DiscountSubmitButton,
  DiscountText,
} from '../SubPageDiscount.styled';
import { FormContext } from '../../../contexts/FormContext';

const DisountFirstForm = () => {
  const [showToolTip, setShowTooltip] = useState(false);
  const { register, errors, handleSubmit, reset } = useForm();
  const history = useHistory();

  const { addNameSurname } = useContext(FormContext);

  const onDiscountFirstFormSubmit = (data) => {
    addNameSurname(data.telephone, data.name, data.surname);
    reset();
    history.push('/subpageone');
    window.scrollTo(0, 0);
  };

  return (
    <DiscountFirstForm onSubmit={handleSubmit(onDiscountFirstFormSubmit)}>
      <DiscountFirstFormTitle>Formularz zamówienia</DiscountFirstFormTitle>
      <DiscountText>
        TAK! Chcę otrzymać SlimStick Patches taniej o XXX. Oznacza to, że mój
        wybór jest całkowicie bezpieczny, ponieważ preparat jest objęty
        Europejską Gwarancją Najwyższej Jakości. Produkt zostanie mi dostarczony
        kurierem w ciągu najbliższych kilku dni.
      </DiscountText>
      <DiscountInputWrapper required>
        <DiscountLabel htmlFor='telephone'>Numer telefonu</DiscountLabel>
        <DiscountInput
          name='telephone'
          type='number'
          placeholder='nr telefonu'
          ref={register({ required: true, minLength: 9, maxLength: 9 })}
          error={errors.telephone}
        />
        {errors.telephone && errors.telephone.type === 'required' && (
          <DiscountError>To pole jest wymagane</DiscountError>
        )}
        {errors.telephone && errors.telephone.type === 'minLength' && (
          <DiscountError>Wpisz 9 cyfr</DiscountError>
        )}
        {errors.telephone && errors.telephone.type === 'maxLength' && (
          <DiscountError>Wpisz 9 cyfr</DiscountError>
        )}
        <DiscountToolTip
          onMouseOver={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          ?
        </DiscountToolTip>
        {showToolTip && (
          <DiscountToolTipText>
            Dlaczego muszę podać nr telefonu? Podany nr zostanie automatycznie
            autoryzowany do kontaktu z naszym biurem obsługi klienta. Na podany
            numer może również kontaktować się firma kurierska w celu umówienia
            dogodnego dla Państwa terminu odbioru przesyłki
          </DiscountToolTipText>
        )}
      </DiscountInputWrapper>
      <DiscountInputWrapper required>
        <DiscountLabel htmlFor='name'>Imię</DiscountLabel>
        <DiscountInput
          name='name'
          type='text'
          placeholder='imię'
          ref={register({ required: true, minLength: 3 })}
          error={errors.name}
        />
        {errors.name && errors.name.type === 'required' && (
          <DiscountError>To pole jest wymagane</DiscountError>
        )}
        {errors.name && errors.name.type === 'minLength' && (
          <DiscountError>Wpisz poprawnie imię</DiscountError>
        )}
      </DiscountInputWrapper>
      <DiscountInputWrapper required>
        <DiscountLabel htmlFor='surname'>Nazwisko</DiscountLabel>
        <DiscountInput
          name='surname'
          type='text'
          placeholder='nazwisko'
          ref={register({ required: true, minLength: 3 })}
          error={errors.surname}
        />
        {errors.surname && errors.surname.type === 'required' && (
          <DiscountError>To pole jest wymagane</DiscountError>
        )}
        {errors.surname && errors.surname.type === 'minLength' && (
          <DiscountError>Wpisz poprawnie nazwisko</DiscountError>
        )}
      </DiscountInputWrapper>
      <DiscountSubmitButton type='submit'>
        Kliknij tutaj, aby otrzymać SlimStick Patches
      </DiscountSubmitButton>
    </DiscountFirstForm>
  );
};

export default DisountFirstForm;
