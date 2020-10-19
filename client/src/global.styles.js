import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 40px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    h1 {
        font-weight: 700;
        margin: 0;
    }

    a{ 
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;