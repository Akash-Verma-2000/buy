// Import necessary dependencies from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import custom contexts
import CustomProductContext from './context/productContext';
import CustomUserContext from './context/userContext';

// Import the main App component
import App from './App';

// Create a root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside the root
root.render(

  // Enable StrictMode to catch common mistakes and improve performance
  <React.StrictMode>

    {/* Wrap the App component with CustomProductContext */}
    <CustomProductContext>
      {/* Wrap the App component with CustomUserContext */}
      <CustomUserContext>

        {/* Render the main App component */}
        <App />

      </CustomUserContext>
    </CustomProductContext>

  </React.StrictMode>
);

