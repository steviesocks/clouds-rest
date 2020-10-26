import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { getCartRef } from '../../firebase/firebase.utils';
import CartActionTypes from './cart.types';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from './cart.selectors';

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* getCartItemsOnSignIn({payload: { id }}) {
    const cartRef = yield getCartRef(id);
    const cartSnapshot = yield cartRef.get();
    const cartItems = yield cartSnapshot.data().cartItems;
    yield put(setCartFromFirebase(cartItems));
}

export function* updateFirebaseCart() {
    const currentUser = yield select(selectCurrentUser) 
    if (currentUser) {
        try {
            const userCartRef = yield getCartRef(currentUser.id)
            const cartItems = yield select(selectCartItems)
            yield userCartRef.update({ cartItems })  
        } catch (error) {
            console.log("error updating cart", error)
        }
    }
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* onSignInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getCartItemsOnSignIn)
}

export function* onUpdateCart() {
    yield takeLatest([
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_ITEM_FROM_CART,
        CartActionTypes.CLEAR_CART
      ], updateFirebaseCart)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onSignInSuccess),
        call(onUpdateCart)
    ])
}