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
  const footerEl = useRef(null);

  const openPopUpScroll = () => {
    if (popUpOpenScroll) {
      return;
    }
    setPopUpOpenScroll(true);
    setPopUpOpen(true);
  };

  useEffect(() => {
    let initPopUpAfterThirtySec;
    let footer = footerEl.current;

    if(initPopUpAfterThirtySec) {
      clearTimeout(initPopUpAfterThirtySec);
      initPopUpAfterThirtySec = null;
    }

    const popUpCountDown = () => {
      if (footer.getBoundingClientRect().top < 800 && !isFormFilled && !initPopUpAfterThirtySec) {
        initPopUpAfterThirtySec = setTimeout(() => {
          openPopUpScroll();
        }, 30000);
      } else {
        clearTimeout(initPopUpAfterThirtySec);
        initPopUpAfterThirtySec = null;
      }

      if (popUpOpenScroll) {
        window.removeEventListener('scroll', popUpCountDown);
      }
    };

    window.addEventListener('scroll', popUpCountDown);

    return () => {
      clearTimeout(initPopUpAfterThirtySec);
      window.removeEventListener('scroll', popUpCountDown);
    };
  });

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
