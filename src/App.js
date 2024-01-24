import React from 'react';
import NavBar from "./components/nav-bar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/app/home-page/HomePage";
import CartPage from './pages/app/cart-page/CartPage';
import OrdersPage from './pages/app/order-page/OrderPage';
import LoginPage from './pages/app/login-page/LoginPage';
import RegisterPage from './pages/app/register-page/RegisterPage';

function App() {

  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [{
        path: "/",
        element: <HomePage />
      }, {
        path: "/orders",
        element: <OrdersPage />
      }, {
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

  return (
    <>

      <RouterProvider router={browserRouter} />

    </>
  );
}
export default App;
