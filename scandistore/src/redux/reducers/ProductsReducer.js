import { ADD_PRODUCTS, REMOVE_PRODUCTS } from '../actions/ProductsAction.js'
import { initialState } from '../store'

export default function productsReducer(state = initialState.cart, action) {
    console.log(action, state);

    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCTS: 
            return { 
                ...state,
                products: [ payload ],
            }
        case REMOVE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter((product) => product !== payload),
            };
        default: 
            return state;
    }
}