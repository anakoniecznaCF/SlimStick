import styled from 'styled-components';

export const FooterStyled = styled.footer`
  margin-top: -7rem;
  position: relative;
  z-index: 6;
`;

export const PartnersContainer = styled.div`
  background-color: ${({theme}) => theme.colors.white};;
  width: 100%;
  margin: 0 auto;
  padding: 1.2rem 0;
`;

export const PartnersList = styled.ul`
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  &:first-child div {
    text-transform: uppercase;
    font-size: 1.45rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.darkBlue};
    min-width: 13rem;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const Image = styled.img`
  max-height: 100%;
  margin-right: 1rem;
`;

export const LinksContainer = styled.div`
  color: ${({theme}) => theme.colors.white};
  display: block;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    #19284b,
    #004b96 25%,
    #004b96 75%,
    #19284b
  );
  padding: 2rem 0;
  text-align: center;
`;

export const Links = styled.div`
  margin-bottom: 0.55rem;
`;

export const Link = styled.a`
  display: inline-block;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  font-weight: 400;
  font-size: 1.45rem;
  line-height: 2.15rem;
  text-decoration: none;

  &:not(:last-child)::after {
    content: '|';
    padding: 0 1.5rem;
  }
`;

export const Copyrights = styled.p`
  font-size: 1rem;
`;
