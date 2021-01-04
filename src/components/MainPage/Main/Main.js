import { useEffect, useState, useRef } from 'react';
import { MainSection } from './Main.styled';
import {
  Header,
  Article,
  FirstForm,
  LastForm,
  Footer,
  PopUp,
} from '../../index';

const Main = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [popUpOpenScroll, setPopUpOpenScroll] = useState(false);
  const [isFormFilled, setFormFilled] = useState(false);
  const [timerInit, setTimer] = useState(false);
  const footerEl = useRef(null);

  const openPopUpScroll = () => {
    setPopUpOpenScroll(true);
    setPopUpOpen(true);
  };

  useEffect(() => {
    let initPopUpAfterThirtySec;
    let footer = footerEl.current;

    if(isFormFilled) {
      clearTimeout(initPopUpAfterThirtySec);
    }

    const popUpCountDown = () => {
      if (footer.getBoundingClientRect().top < 800 && !isFormFilled && !popUpOpenScroll && !timerInit) {
        initPopUpAfterThirtySec = setTimeout(() => {
          openPopUpScroll();
        }, 10000);
        setTimer(true);
      }
    };

    window.addEventListener('scroll', popUpCountDown);

    return () => {
      clearTimeout(initPopUpAfterThirtySec);
      window.removeEventListener('scroll', popUpCountDown);
    };
  }, [popUpOpenScroll, isFormFilled, timerInit]);

  return (
    <MainSection>
      {isPopUpOpen && <PopUp showPopUp={setPopUpOpen} />}
      <Header />
      <FirstForm setFormFilled={setFormFilled}/>
      <Article />
      <LastForm setFormFilled={setFormFilled}/>
      <Footer innerRef={footerEl} />
    </MainSection>
  );
};

export default Main;
