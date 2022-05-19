import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore, persistor } from './redux/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

const client = new ApolloClient({ 
  uri: 'http://localhost:4000', // Change to localhost:4000
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
    <ApolloProvider client={client}>
    <App />
   </ApolloProvider>
   </PersistGate>
    </Provider>
  </React.StrictMode>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
