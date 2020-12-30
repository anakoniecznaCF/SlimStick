import styled from 'styled-components';

const OfferInfo = styled.p`
  margin-bottom: 20px;
  font-family: 'Oxygen';
  font-size: 16px;
  line-height: 29px;
  color: #555555;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 18px;
  }
`;

const OfferInfoComponent = ({ content }) => {
  return(
    <OfferInfo>
      { content }
    </OfferInfo>
  )
}

export default OfferInfoComponent;