import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserDetailsProvider from "./components/UserDetailsProvider";
import ApostadorDetailsProvider from './components/ApostadorDetailsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDetailsProvider>
      <ApostadorDetailsProvider>
        <App/>
      </ApostadorDetailsProvider>
    </UserDetailsProvider>
  </React.StrictMode>
);