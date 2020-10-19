import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 3fr 4fr 4fr 2fr 1fr;
        grid-gap: 7px;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const TextContainer = styled.div`
    width: 23%;

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const QuantityContainer = styled(TextContainer)`
    display: flex;
    justify-content: start;

    span {
        margin: 0 10px;
    }

    div {
        cursor: pointer;
    }
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;