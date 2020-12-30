import styled from 'styled-components';

const Subtitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    margin-bottom: 1.6rem;
    color: ${({theme}) => theme.colors.darkBlue};
`;

export default Subtitle;
