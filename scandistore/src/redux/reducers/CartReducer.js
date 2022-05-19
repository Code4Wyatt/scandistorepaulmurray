import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../actions/CartAction.js'
import { initialState } from '../store'

export default function cartReducer(state = initialState.cart, action) {
    console.log(action, state);

    const { type, payload } = action;

    switch (type) {
        case ADD_CART_ITEM: 
            return { 
                ...state,
                cart: [ payload ],
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.filter((cart) => cart !== payload),
            };
        default: 
            return state;
    }
}