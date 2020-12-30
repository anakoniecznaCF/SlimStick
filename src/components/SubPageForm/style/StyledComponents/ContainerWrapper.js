import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;

  @media only screen and (min-width: 768px){
    display: flex;
    max-width: 768px;
  }

  @media only screen and (min-width: 1104px){
    padding-right: 0;
    padding-left: 0;
    max-width: 1024px;
  }
`
export { ContainerWrapper };