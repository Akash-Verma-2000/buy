// Import necessary dependencies from React
import { useEffect } from "react";
import ProductCard from "../../../components/product-card/ProductCard";

// Import custom hook to access product-related context
import { useProductContext } from "../../../context/productContext";

// Define the CartPage component
export default function CartPage() {
  // Destructure values from the product context using the custom hook
  const { cartProductsArray, removeFromCart, getCartProducts } =
    useProductContext();

  // Use useEffect to fetch cart products when the component mounts
  useEffect(() => {
    getCartProducts();
  }, []);

  // Render the CartPage component
  return (
    <div className="container">
      {/* Display the heading for the cart page */}
      <h1 className="my-5 text-center text-primary">My Cart</h1>
      {/* Display a row of ProductCard components for each product in the cart */}
      <div className="row">
        {/* Map through the cart products and render a ProductCard for each */}
        {cartProductsArray.map((product) => {
          return (
            <ProductCard
              product={product}
              quntityBTN={true}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    </div>
  );
}
