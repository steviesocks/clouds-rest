import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px) {
        width: 90vw;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 3fr 4fr 4fr 2fr 1fr;
    }
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media screen and (max-width: 800px) {
        margin-bottom: 30px;
    }
`;

export const TestCardContainer = styled.div`
    color: red;
    margin-top: 30px;
    text-align: center;
`;