import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomProductContext from './context/productContext';
import CustomUserContext from './context/userContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <CustomProductContext>
      <CustomUserContext>


        <App />


      </CustomUserContext>
    </CustomProductContext>

  </React.StrictMode>
);

