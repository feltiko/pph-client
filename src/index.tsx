import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'storeon/react';

import 'antd/dist/antd.css';

import App from './components/base/App';

import { store } from './store';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
