import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/create-store'

import App from './App';
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
      <App />
  	</BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

