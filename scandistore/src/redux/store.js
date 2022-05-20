import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import cartReducer from '../redux/reducers/CartReducer'
import productsReducer from "./reducers/ProductsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  cart: {
    items: [],
  },
  products: {
    items: [],
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) => {
                console.log('encryption error', Error)
            }
        })
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(configureStore)