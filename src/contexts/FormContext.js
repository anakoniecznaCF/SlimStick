import { createContext, useState } from 'react';
import regular from '../assets/regular.png';
import set from '../assets/zestaw.png';

export const FormContext = createContext();

const FormContextProvider = (props) => {
  
  const productBigPackageDetails = {name: 'Big', quantity: '1', price: 234, delivery: 0, img: regular};
  const productRegularPackageDetails ={name: 'Regular', quantity: '1', price: 137, oldPrice: 274, discountPrice: 87, delivery: 30, img: regular};
  const productRegularPackageWithCareDetails = {name: 'RegularWithCare', quantity: '1', price: 234, delivery: 0, img: regular};
  const productSetPackageWithCareDetails ={name: 'SetWithCare', quantity: '2', price: 274, delivery: 0, img: set};

  const [user, setUser] = useState({});
  const [selectedProduct, setSelectedProduct] = useState({});

  const addNameSurname = (telephone, name, surname) => {
    setUser({...user, telephone: telephone, name: name, surname: surname});
  };

  const addAdress = (street, postCode, city, message, email, country) => {
    setUser({...user, street: street, postCode: postCode, city: city, message: message, email: email, country: country});
  };

  return (
    <FormContext.Provider value={{ user, addNameSurname, addAdress, productBigPackageDetails, productRegularPackageDetails, productRegularPackageWithCareDetails, productSetPackageWithCareDetails, selectedProduct, setSelectedProduct}}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
