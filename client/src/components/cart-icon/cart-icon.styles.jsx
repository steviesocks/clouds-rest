import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 55px;
        height: 55px;
    } 
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 24px;
    height: 24px;

    @media screen and (max-width: 800px) {
        width: 30px;
        height: 30px;
    } 
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;

    @media screen and (max-width: 800px) {
        font-size: 14px;
        bottom: 15px;
    } 
`