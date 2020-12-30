import styled from 'styled-components';
import {Container} from '../index';

export const Wrapper = styled(Container)`
width: 90%;

@media (min-width: 576px) {
  width: 75%;
}

@media (min-width: 768px) {
  width: 84%;
}

@media (min-width: 1200px) {
  width: 60%;
}
`;

export default Wrapper;