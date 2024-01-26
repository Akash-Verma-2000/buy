// Import the CSS file for styling
import "./Button.css";

// Import the custom hook to access product-related context
import { useProductContext } from "../../context/productContext";

// Functional component for a custom increase quantity button
export default function IncreaseButton({ product }) {
  // Use the custom hook to access the increaseQuantity function from the product context
  const { increaseQuantity } = useProductContext();

  // Render a button element with a specific class for styling
  return (
    <button
      // Attach an onClick event handler to execute the increaseQuantity function with the provided product
      onClick={() => {
        increaseQuantity(product);
      }}
      // Apply a custom class for styling purposes
      className="quantity-btn"
    >
      {/* Render an icon representing an increase action */}
      <i className="bi bi-plus-circle-fill"></i>
    </button>
  );
}
