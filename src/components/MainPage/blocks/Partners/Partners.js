import styled from 'styled-components';
import inpost from '../../../../assets/Desktop/inpost.png';
import poczta from '../../../../assets/Desktop/pocztapolska.png';
import dpd from '../../../../assets/Desktop/dpd.png';
import visa from '../../../../assets/Desktop/visa.png';
import dhl from '../../../../assets/Desktop/dhl.png';
import mastercard from '../../../../assets/Desktop/mastercard.png';

const PartnersContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Partner = styled.div`
  width: fit-content;
  margin: ${props => props.discountForm ? '15px' : '12px'};
`;

const PartnerImg = styled.img`
  height: ${props => props.discountForm ? '35px' : '45px'};

  @media (min-width: 768px) {
    height: 45px;
  }
`;

const Partners = ({...props}) => {
  return (
    <PartnersContainer>
      <Partner>
        <PartnerImg {...props} src={inpost} alt='dhl logo' />
      </Partner>
      <Partner>
        <PartnerImg {...props} src={poczta} alt='dpd logo' />
      </Partner>
      <Partner>
        <PartnerImg {...props} src={dpd} alt='inpost logo' />
      </Partner>
      <Partner>
        <PartnerImg {...props} src={visa} alt='poczta logo' />
      </Partner>
      <Partner>
        <PartnerImg {...props} src={dhl} alt='visa logo' />
      </Partner>
      <Partner>
        <PartnerImg {...props} src={mastercard} alt='mastercard logo' />
      </Partner>
    </PartnersContainer>
  );
};

export default Partners;
