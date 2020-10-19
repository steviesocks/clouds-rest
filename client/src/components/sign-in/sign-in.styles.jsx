import styled from 'styled-components';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 90vw;
    }
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 10px;
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;