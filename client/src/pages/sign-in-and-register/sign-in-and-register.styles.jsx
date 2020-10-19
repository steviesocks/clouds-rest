import styled from 'styled-components';

export const SignInAndRegisterContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
        margin: 0 10px;
        width: 100%;
    }
`;

export const ToggleNewUserButton = styled.h3`
    color: darkgrey;
`