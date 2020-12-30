import { useEffect, useState, useContext } from 'react';
import {
  Overlay,
  DiscountWrapper,
  DiscountTitle,
  DiscountTimerText,
  DiscountTimer,
  DiscountPromo,
  DiscountPrice,
  OldPrice,
  NewPrice,
  NewPriceOrange,
  DiscountImage,
  DiscountText,
  PromotionOver,
} from './SubPageDiscount.styled';
import product from '../../assets/Desktop/SlimStick-strona2-produkt.png';
import DiscountFirstForm from './DiscountFirstForm/DiscountFirstForm';
import { FormContext } from '../../contexts/FormContext';

const SubPageDiscount = () => {
  const [minute, setMinute] = useState('15');
  const [second, setSecond] = useState('00');
  const [counter, setCounter] = useState(15 * 60);
  const [showOverlay, setShowOverlay] = useState(false);

  const { productRegularPackageDetails } = useContext(FormContext);

  const percentage = (((productRegularPackageDetails.oldPrice - productRegularPackageDetails.discountPrice)/ productRegularPackageDetails.oldPrice) * 100).toFixed(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      const secondCounter = parseInt(counter % 60, 10);
      const minuteCounter = parseInt(counter / 60, 10);

      const computedSecond =
        String(secondCounter).length === 1
          ? `0${secondCounter}`
          : secondCounter;
      const computedMinute =
        String(minuteCounter).length === 1
          ? `0${minuteCounter}`
          : minuteCounter;

      setSecond(computedSecond);
      setMinute(computedMinute);

      if (counter >= 0) {
        setCounter(counter - 1);
      } else {
        setShowOverlay(true);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <>
      {showOverlay && <Overlay />}
      <div>
        <DiscountWrapper centerColumnBoth>
          <DiscountTitle>Twój jednorazowy rabat {percentage}%</DiscountTitle>
          <div>
            <DiscountTimerText>obowiązuje jeszcze przez</DiscountTimerText>
            <DiscountTimer>
              {counter > 0 ? (
                `${minute}:${second}`
              ) : (
                <PromotionOver>Promocja wygasła!</PromotionOver>
              )}
            </DiscountTimer>
          </div>
          <DiscountPromo>
            <DiscountPrice>
              <OldPrice>Stara cena: {productRegularPackageDetails.oldPrice} PLN</OldPrice>
              <NewPrice>Cena promocyjna:</NewPrice>
              <NewPriceOrange>{productRegularPackageDetails.discountPrice} PLN</NewPriceOrange>
            </DiscountPrice>
            <DiscountImage src={product} alt='SlimStick Patches' />
          </DiscountPromo>
          <DiscountText>
            Gratulacje! Właśnie udało Ci się uzyskać unikalną szansę zamówienia
            SlimStick Patches w cenie obniżonej o {percentage}%!
          </DiscountText>
          <DiscountText>Ta oferta NIGDY nie pojawi się ponownie</DiscountText>
          <DiscountText>
            Skorzystaj z wyjątkowej okazji i odbierz opakowanie w specjalnej
            cenie. Promocja wyświetla się tylko Tobie i trwa jedynie 15 min.
          </DiscountText>
          <DiscountFirstForm />
        </DiscountWrapper>
      </div>
    </>
  );
};

export default SubPageDiscount;
