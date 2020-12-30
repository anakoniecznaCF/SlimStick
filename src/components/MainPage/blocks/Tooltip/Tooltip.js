import styled from 'styled-components';
import FlexWrapper from '../FlexWrapper/FlexWrapper';

const ToolTipStyled = styled.span`
  position: absolute;
  top: 0.35rem;  
  right: 0.5rem;
  font-size: 2.4rem;
  width: 2.9rem;
  height: 2.9rem;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 50%;
  cursor: help;

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
    top: 0.9rem;
    right: 0.8rem;
  }
`;

const ToolTipText = styled.span`
  position: absolute;
  z-index: 9999;
  text-align: center;
  width: 300px;
  font-size: 1.4rem;
  border-radius: 1rem;
  color: #212121;
  padding: 5px;
  background-color: ${({theme}) => theme.colors.grey};
  border: 1px solid #000;
  top: -115px;
  right: -30px;
  line-height: normal;
`;

const Tooltip = ({showToolTip, setShowTooltip}) => {
    return (
        <>
        <FlexWrapper as={ToolTipStyled} centerRowBoth
        onMouseOver={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        ?
      </FlexWrapper>
      {showToolTip && (
        <ToolTipText>
          Dlaczego muszę podać nr telefonu? Podany nr zostanie
          automatycznie autoryzowany do kontaktu z naszym biurem
          obsługi klienta. Na podany numer może również kontaktować
          się firma kurierska w celu umówienia dogodnego dla Państwa
          terminu odbioru przesyłki
        </ToolTipText>
      )}
      </>
    )
};

export default Tooltip;