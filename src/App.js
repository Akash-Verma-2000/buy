// Import React and other necessary components
import React from 'react';
import NavBar from "./components/nav-bar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/app/home-page/HomePage";
import CartPage from './pages/app/cart-page/CartPage';
import LoginPage from './pages/app/login-page/LoginPage';
import RegisterPage from './pages/app/register-page/RegisterPage';

// Define the main App component
function App() {

  // Create a BrowserRouter instance using createBrowserRouter
  const browserRouter = createBrowserRouter([
    {

      // Define routes and their corresponding components
      path: "/",
      element: <NavBar />,
      children: [{
        path: "/",
        element: <HomePage />
      },

      {
        path: "/cart",
        element: <CartPage />
      }
        , {
        path: "/login",
        element: <LoginPage />
      }
        , {
        path: "/register",
        element: <RegisterPage />
      }
      ]
    }

  ]);

  // Return the main JSX structure
  return (
    <>

      <RouterProvider router={browserRouter} />

    </>
  );
}

// Export the App component as the default export
export default App;
