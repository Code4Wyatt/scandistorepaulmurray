export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS';

export const addProductsAction = (data) => ({
    type: ADD_PRODUCTS,
    payload: data,
})

export const removeProductsAction = (index) => ({
    type: REMOVE_PRODUCTS,
    payload: index,
})