import { SET_CURRENCY, REMOVE_CURRENCY} from '../actions/CurrencyAction.js'
import { initialState } from '../store'

export default function currencyReducer(state = initialState.cart, action) {
    console.log(action, state);

    const { type, payload } = action;

    switch (type) {
        case SET_CURRENCY: 
            return { 
                ...state,
                value: [ payload ],
            }
        case REMOVE_CURRENCY:
            return {
                ...state,
                value: state.cart.filter((cart) => cart !== payload),
            };
        default: 
            return state;
    }
}