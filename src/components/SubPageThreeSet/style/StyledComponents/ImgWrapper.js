import styled from 'styled-components';

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`

export { ImgWrapper }