import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';

const store = configureStore({

  reducer: {
    global: globalReducer,},
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <React.StrictMode>
    <BrowserRouter>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

