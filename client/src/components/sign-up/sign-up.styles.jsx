import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
        width: 90vw;
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;

export const SignUpForm = styled.form`
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 5px;
`;