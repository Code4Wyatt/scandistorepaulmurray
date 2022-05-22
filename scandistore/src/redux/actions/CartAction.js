export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const addCartItemAction = (data) => ({
    type: ADD_CART_ITEM,
    payload: [data],
})

export const removeCartItemAction = (index) => ({
    type: REMOVE_CART_ITEM,
    payload: index,
})