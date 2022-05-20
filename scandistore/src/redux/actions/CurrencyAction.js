export const SET_CURRENCY = 'SET_CURRENCY';
export const REMOVE_CURRENCY = 'REMOVE_CURRENCY';

export const setCurrencyAction = (data) => ({
    type: SET_CURRENCY,
    payload: data,
})

export const removeCartItemAction = (index) => ({
    type: REMOVE_CURRENCY,
    payload: index,
})