import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';
import {FlexWrapper} from '../blocks/index';

const fadeIn = keyframes`
  0%   { display: block; opacity: 0;  }
  30% { display: block; opacity: .5; }
  60% { display: block; opacity: .8; }
  100% { display: block; opacity: 1; } 
}
`;

export const PopUpWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  transition: all 0.3s;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
`;

export const PopUpContent = styled(FlexWrapper)`
  width: 100%;
  padding: 5rem 5rem 3rem;
  border-radius: 0.5rem;
  max-width: 85rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({theme}) => theme.colors.white};;
  animation: ${fadeIn} 0.3s ease-out forwards;

  @media (min-width: 576px) {
    width: 90%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }
`;

export const CloseBtn = styled.span`
  position: absolute;
  text-align: right;
  text-decoration: none;
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  transition: all 0.3s;
  top: -1rem;
  right: 0;
  font-size: 6rem;

  @media (min-width: 768px) {
    top: -7.5rem;
    right: -5rem;
    color: ${({theme}) => theme.colors.white};;
    font-size: 8rem;
  }
`;

export const PopUpText = styled(FlexWrapper)`
  text-align: center;
  color: rgba(0, 0, 0, 0.8);

  & h2,
  p,
  a {
    margin: 0 auto 1rem;
  }
`;

export const PopUpTitle = styled.h2`
  font-size: 5.5rem;
  line-height: 5.5rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.darkBlue};
  letter-spacing: 1.5px;

  @media (min-width: 576px) {
    font-size: 6.1rem;
  }

  @media (min-width: 1200px) {
    font-size: 7rem;
  }
`;

export const PopUpOffer = styled.p`
  font-size: 2.25rem;
  font-weight: 600;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.8rem;
  }
`;

export const PopUpDiscount = styled.p`
  font-size: 2.25rem;
  line-height: 2.9rem;
  font-weight: 500;
  display: inline-block;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.8rem;
  }
`;

export const Bold = styled.span`
  font-weight: 800;
  text-transform: uppercase;
`;

export const PopUpCollect = styled.p`
  font-size: 1.25rem;

  @media (min-width: 576px) {
    font-size: 1.45rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.6rem;
  }
`;

export const SubmitBtn = styled.a`
  width: 100%;
  max-width: 23rem;
  display: block;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.violet};
  color: ${({theme}) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.6rem 1rem;
  border-radius: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.1s ease;
  cursor: pointer;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

export const ClosePopUp = styled.span`
  color: ${({theme}) => theme.colors.lightGrey};
  max-width: fit-content;
  font-size: 1.2rem;
  text-decoration: none;
  margin: 0 auto;
  display: inline;
  transition: all 0.1s ease;
  cursor: pointer;

  @media (min-width: 576px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const PopUpImageWrapper = styled.div`
  display: none;
  max-width: 30rem;
  margin-left: 2rem;
  position: relative;

  @media (min-width: 768px) {
    display: block;

    &::before {
      content: '-${props => props.percentage}%';
      width: 10rem;
      height: 10rem;
      background:${({theme}) => theme.colors.yellow};
      color: ${({theme}) => theme.colors.white};
      border: 3px solid #fff;
      font-size: 3.5rem;
      font-weight: 700;
      position: absolute;
      border-radius: 50%;
      top: -3rem;
      right: -3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotate(20deg);
    }
  }
`;

export const PopUpImage = styled.img`
  width: 125%;
  height: auto;
`;
