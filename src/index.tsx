import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

import './scss/app.scss';
import { fetchData } from './store/allowedValuesSlice';

// import reportWebVitals from './reportWebVitals.js';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

store.dispatch(fetchData());

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
