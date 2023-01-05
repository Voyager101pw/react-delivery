import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

import './scss/app.scss';

import { fetchPizzas } from './redux/pizzas/asyncThunks';
import { fetchCart } from './redux/cart/asyncThunks';
// import reportWebVitals from './reportWebVitals.js';

const container = document.getElementById('root');

if (container) {
  store.dispatch(fetchPizzas());
  store.dispatch(fetchCart());
  const root = ReactDOM.createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
