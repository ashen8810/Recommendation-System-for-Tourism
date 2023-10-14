import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state';
import { Provider } from 'react-redux';


const store = configureStore({

  reducer: {
    global: globalReducer,},
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";


const store = configureStore({

  reducer: {
    global: globalReducer,},
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

