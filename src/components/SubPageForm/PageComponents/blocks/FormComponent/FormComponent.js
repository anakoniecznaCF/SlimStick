import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  PopupFormWrapper,
  PopupLabel,
  InputsBlock,
  InputWrapper,
  PopupInput,
  InputTextValidation,
  PopupFormButton,
  AnswerBlock,
  AnswerBlockIcon,
  AnswerBlockInfo,
  DeliveryIconsWrapper,
} from './FormComponent.styles.js';

import postIcon from '../../../Assets/partner-poczta.jpg';
import Inpost from '../../../Assets/partner-inpost.jpg';
import dhl from '../../../Assets/partner-dhl.jpg';
import dpd from '../../../Assets/partner-dpd.jpg';
import visa from '../../../Assets/partner-visa.jpg';
import masterCard from '../../../Assets/partner-mastercard.jpg';
import blik from '../../../Assets/partner-blik.jpg';

import { FormContext } from '../../../../../contexts/FormContext';

const FormComponent = () => {
  // Odkomentować przy użyciu komponentu
  const { user, addNameSurname, addAdress, selectedProduct } = useContext(
    FormContext
  ); //constants: telephone, name, surname, street, postCode, city, message, email
  const history = useHistory();
  // Odkomentować user  do testów
  // const user = {
  //   surname: 'Kowalski',
  //   name: 'Jan',
  //   street: 'Aleja Pawła II',
  //   postCode: '00-000',
  //   city: 'Warszawa'
  // }

  const [inputDisabled, setInputDisabled] = useState(true);

  const [inputValues, setInputValues] = useState({
    inputSurname: user.surname ? user.surname : '',
    inputName: user.name ? user.name : '',
    inputEmail: user.email ? user.email : '',
    inputUserPhone: user.telephone ? user.telephone : '',
    inputAddress: user.street ? user.street : '',
    inputPostCode: user.postCode ? user.postCode.replace(/[^0-9+]/gi, '') : '',
    inputCityName: user.city ? user.city : '',
    inputCountry: 'Polska',

    inputMessage: user.message ? user.message : '',
  });

  const undisabledInputs = () => {
    setInputDisabled(false);
  };

  //popupModal data fo send
  // const [popupModalSendData, setPopupModalSendData] = useState('')

  //validation email
  const patt = /^[^@]+@[^@.]+\.[^@]+$/;

  //input errors validation
  const [errorPostCode, setErrorPostCode] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorCityName, setErrorCityName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorSurname, setErrorSurname] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  const showErrorPostCode = () => {
    if (inputValues.inputPostCode.length !== 5) {
      setErrorPostCode(true);
    } else {
      setErrorPostCode(false);
    }
  };

  const showErrorPhone = () => {
    if (inputValues.inputUserPhone.length < 9) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
  };

  const showErrorEmail = () => {
    let result = inputValues.inputEmail.match(patt);

    if (result === null) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const showTextInputError = (inputVariable, inputErrorIndexFunc) => {
    if (inputVariable < 3) {
      inputErrorIndexFunc(true);
    } else {
      inputErrorIndexFunc(false);
    }
  };

  //change input's values

  const handleChangeName = (e) => {
    setInputValues({ ...inputValues, inputName: e.target.value });
    setErrorName(false);
  };

  const handleChangeSurname = (e) => {
    setInputValues({ ...inputValues, inputSurname: e.target.value });
    setErrorSurname(false);
  };

  const handleChangeUserPhone = (e) => {
    setInputValues({ ...inputValues, inputUserPhone: e.target.value });
    setErrorPhone(false);
  };

  const handleChangeCountry = (e) => {
    setInputValues({ ...inputValues, inputCountry: e.target.value });
    setErrorCountry(false);
  };

  const handleChangeAddress = (e) => {
    setInputValues({ ...inputValues, inputAddress: e.target.value });
    setErrorAddress(false);
  };

  const handleChangePostCode = (e) => {
    setInputValues({ ...inputValues, inputPostCode: e.target.value });
    setErrorPostCode(false);
  };

  const handleChangeCityName = (e) => {
    setInputValues({ ...inputValues, inputCityName: e.target.value });
    setErrorCityName(false);
  };

  const handleChangeEmail = (e) => {
    setInputValues({ ...inputValues, inputEmail: e.target.value });
    setErrorEmail(false);
  };

  //form submit function
  const submitPopupModal = (e) => {
    e.preventDefault();
    let result = inputValues.inputEmail.match(patt);

    // if (
    //   inputValues.inputAddress.length >= 3 &&
    //   inputValues.inputPostCode.length === 5 &&
    //   inputValues.inputCityName.length >= 3 &&
    //   inputValues.inputSurname.length >= 3 &&
    //   inputValues.inputUserPhone.length >= 9 &&
    //   (inputValues.inputEmail.length === 0 || result)
    // ) {
    addNameSurname(
      inputValues.inputUserPhone,
      inputValues.inputName,
      inputValues.inputSurname
    );
    addAdress(
      inputValues.inputAddress,
      inputValues.inputPostCode,
      inputValues.inputCityName,
      inputValues.inputMessage,
      inputValues.inputEmail,
      inputValues.inputCountry
    );

    window.scrollTo(0, 0);
    if (selectedProduct.name === 'Regular') {
      history.push('/subpagethreeregular');
    } else if (selectedProduct.name === 'Big') {
      history.push('/subpagethreeset');
    }
    // const popupDataToSend = {
    //   user_name: inputValues.inputName,
    //   user_surname: inputValues.inputSurname,
    //   user_email: inputValues.inputEmail,
    //   user_phone: inputValues.inputUserPhone,
    //   user_adress: inputValues.inputAddress,
    //   user_post_code: inputValues.inputPostCode,
    //   user_city: inputValues.inputCityName,
    //   user_country: inputValues.inputCountry,
    //   user_message: inputValues.inputMessage,
    // }

    setInputValues({
      inputAddress: '',
      inputName: '',
      inputPostCode: '',
      inputCityName: '',
      inputEmail: '',
      inputUserPhone: '',
      inputCountry: '',
      inputSurname: '',
    });

    // setPopupModalSendData(popupDataToSend)
    showErrorPostCode();
    showErrorEmail();
    showErrorPhone();
    showTextInputError(inputValues.inputAddress, setErrorAddress);
    showTextInputError(inputValues.inputCityName, setErrorCityName);
    showTextInputError(inputValues.inputSurname, setErrorSurname);
    showTextInputError(inputValues.inputName, setErrorName);
    showTextInputError(inputValues.inputCountry, setErrorCountry);
    // console.log(popupDataToSend)
    // } else {
    //   showErrorPostCode();
    //   showErrorEmail();
    //   showErrorPhone();
    //   showTextInputError(inputValues.inputAddress, setErrorAddress);
    //   showTextInputError(inputValues.inputCityName, setErrorCityName);
    //   showTextInputError(inputValues.inputSurname, setErrorSurname);
    //   showTextInputError(inputValues.inputName, setErrorName);
    //   showTextInputError(inputValues.inputCountry, setErrorCountry);
    // }
  };

  return (
    <>
      <PopupFormWrapper onSubmit={submitPopupModal} as='form'>
        <InputsBlock>
          <InputWrapper errorName={errorName}>
            <PopupLabel htmlFor='name_form'>Imię</PopupLabel>
            <PopupInput
              onInput={handleChangeName}
              value={inputValues.inputName}
              disabled={inputDisabled}
              name='name_form'
              id='name_form'
              placeholder={inputValues.inputName}
            />
            <InputTextValidation>Wpisz imię</InputTextValidation>
          </InputWrapper>

          <InputWrapper errorSurname={errorSurname}>
            <PopupLabel htmlFor='surname_form'>Nazwisko</PopupLabel>
            <PopupInput
              onInput={handleChangeSurname}
              value={inputValues.inputSurname}
              disabled={inputDisabled}
              placeholder={inputValues.inputSurname}
              name='surname_form'
              id='surname_form'
            />
            <InputTextValidation>Wpisz nazwisko</InputTextValidation>
          </InputWrapper>
        </InputsBlock>

        <InputsBlock>
          <InputWrapper errorEmail={errorEmail}>
            <PopupLabel htmlFor='email_form'>E-mail:</PopupLabel>
            <PopupInput
              onInput={handleChangeEmail}
              value={inputValues.inputEmail}
              // disabled={inputDisabled}
              placeholder={inputValues.inputEmail}
              name='email_form'
              id='email_form'
            />
            <AnswerBlock>
              <AnswerBlockIcon>?</AnswerBlockIcon>
              <AnswerBlockInfo>
                Dlaczego muszę podać adres e-mail? Podany adres e-mail zostanie
                automatycznie autoryzowany do kontaktu z Biurem Obsługi Klienta.
                Na podany adres e-mail firma kuriera może również wysłać
                wiadomość ze szczegółami dotyczącymi Państwa zamówienia.
              </AnswerBlockInfo>
            </AnswerBlock>
            <InputTextValidation>Wpisz poprawnie e-mail</InputTextValidation>
          </InputWrapper>

          <InputWrapper errorPhone={errorPhone}>
            <PopupLabel htmlFor='phone_number_form'>Numer telefonu</PopupLabel>
            <PopupInput
              onInput={handleChangeUserPhone}
              value={inputValues.inputUserPhone.replace(/[^0-9+]/gi, '')}
              disabled={inputDisabled}
              placeholder={inputValues.inputUserPhone}
              name='phone_number_form'
              id='phone_number_form'
            />
            <AnswerBlock>
              <AnswerBlockIcon>?</AnswerBlockIcon>
              <AnswerBlockInfo>
                Dlaczego muszę podać numer telefonu? Podany numer zostanie
                automatycznie autoryzowany do kontaktu z Biurem Obsługi Klienta.
                Na podany numer może również kontaktować się firma kurierska w
                celu umówienia dogodnego dla Państwa terminu wysyłki.
              </AnswerBlockInfo>
            </AnswerBlock>
            <InputTextValidation>
              Wpisz poprawnie numer telefonu
            </InputTextValidation>
          </InputWrapper>
        </InputsBlock>

        <InputWrapper errorAddress={errorAddress} full_width>
          <PopupLabel htmlFor='adress_form'>
            Ulica, numer domu/mieszkania
          </PopupLabel>
          <PopupInput
            onInput={handleChangeAddress}
            value={inputValues.inputAddress}
            // disabled={inputDisabled}
            name='adress_form'
            id='adress_form'
            placeholder={inputValues.inputAddress}
          />
          <InputTextValidation>Wpisz poprawnie adres</InputTextValidation>
        </InputWrapper>

        <InputsBlock>
          <InputWrapper errorCityName={errorCityName}>
            <PopupLabel htmlFor='city_form'>Miejscowość:</PopupLabel>
            <PopupInput
              onInput={handleChangeCityName}
              value={inputValues.inputCityName}
              // disabled={inputDisabled}
              name='city_form'
              id='city_form'
              placeholder={inputValues.inputCityName}
            />
            <InputTextValidation>
              Wpisz poprawnie miejscowość
            </InputTextValidation>
          </InputWrapper>
          <InputWrapper errorPostCode={errorPostCode}>
            <PopupLabel htmlFor='post_form'>Kod pocztowy</PopupLabel>
            <PopupInput
              onInput={handleChangePostCode}
              value={inputValues.inputPostCode.replace(/[^0-9+]/gi, '')}
              // disabled={inputDisabled}
              name='post_form'
              id='post_form'
              placeholder={inputValues.inputPostCode.replace(/[^0-9+]/gi, '')}
            />
            <InputTextValidation>
              Nieprawidłowy kod pocztowy
            </InputTextValidation>
          </InputWrapper>
        </InputsBlock>

        <InputsBlock>
          <InputWrapper errorCountry={errorCountry}>
            <PopupLabel htmlFor='country_form'>Kraj</PopupLabel>
            <PopupInput
              as='select'
              onInput={handleChangeCountry}
              value={inputValues.inputCountry}
              // disabled={inputDisabled}
              placeholder={inputValues.inputCountry}
              name='country_form'
              id='country_form'
            >
              <option value='Albania'>Albania</option>{' '}
              <option value='limonkowy'>Limonkowy</option>
              <option value='Andora'>Andora</option>{' '}
              <option value='Austria'>Austria</option>
              <option value='Belgia'>Belgia</option>{' '}
              <option value='Białoruś'>Białoruś</option>
              <option value='Bośnia i Hercegowina'>
                Bośnia i Hercegowina
              </option>{' '}
              <option value='Bułgaria'>Bułgaria</option>
              <option value='Chorwacja'>Chorwacja</option>{' '}
              <option value='Czarnogóra'>Czarnogóra</option>
              <option value='Czechy'>Czechy</option>{' '}
              <option value='Dania'>Dania</option>
              <option value='Estonia'>Estonia</option>{' '}
              <option value='Finlandia'>Finlandia</option>
              <option value='Francja'>Francja</option>{' '}
              <option value='Grecja'>Grecja</option>
              <option value='Hiszpania'>Hiszpania</option>{' '}
              <option value='Holandia'>Holandia</option>
              <option value='Irlandia'>Irlandia</option>{' '}
              <option value='Islandia'>Islandia</option>
              <option value='Kazachstan'>Kazachstan</option>{' '}
              <option value='Liechtenstein'>Liechtenstein</option>
              <option value='Litwa'>Litwa</option>{' '}
              <option value='Luksemburg'>Luksemburg</option>
              <option value='Łotwa'>Łotwa</option>{' '}
              <option value='Macedonia Północna'>Macedonia Północna</option>
              <option value='Malta'>Malta</option>{' '}
              <option value='Mołdawia'>Mołdawia</option>
              <option value='Monako'>Monako</option>
              <option value='Niemcy'>Niemcy</option>{' '}
              <option value='Norwegia'>Norwegia</option>
              <option defaultValue='Polska'>
                Polska
              </option>{' '}
              <option value='Portugalia'>Portugalia</option>
              <option value='Rosja'>Rosja</option>{' '}
              <option value='Rumunia'>Rumunia</option>
              <option value='San Marino'>San Marino</option>{' '}
              <option value='Serbia'>Serbia</option>
              <option value='Słowacja'>Słowacja</option>{' '}
              <option value='Słowenia'>Słowenia</option>
              <option value='Szwajcaria'>Szwajcaria</option>{' '}
              <option value='Szwecja'>Szwecja</option>
              <option value='Turcja'>Turcja</option>{' '}
              <option value='Ukraina'>Ukraina</option>
              <option value='Watykan'>Watykan</option>{' '}
              <option value='Węgry'>Węgry</option>
              <option value='Wielka Brytania'>Wielka Brytania</option>{' '}
              <option value='Włochy'>Włochy</option>
            </PopupInput>
            <InputTextValidation>Wpisz kraj</InputTextValidation>
          </InputWrapper>
        </InputsBlock>

        <InputsBlock>
          <PopupFormButton as='div' button_secondary onClick={undisabledInputs}>
            POPRAW
          </PopupFormButton>
          <PopupFormButton
            // disabled={inputDisabled}
            type='submit'
          >
            POTWIERDŹ
          </PopupFormButton>
        </InputsBlock>
      </PopupFormWrapper>
      <DeliveryIconsWrapper>
        <img src={postIcon} alt='poczta polska'></img>
        <img src={Inpost} alt='Inpost'></img>
        <img src={dhl} alt='DHL'></img>
        <img src={dpd} alt='DPD'></img>
        <img src={visa} alt='visa'></img>
        <img src={masterCard} alt='masterCard'></img>
        <img src={blik} alt='blik'></img>
      </DeliveryIconsWrapper>
    </>
  );
};

export default FormComponent;
