// Import the CSS file for styling
import "./Button.css";

// Import the custom hook to access product-related context
import { useProductContext } from "../../context/productContext";

// Functional component for a custom decrease quantity button
export default function DecreaseButton({ product }) {
  // Use the custom hook to access the decreaseQuantity function from the product context
  const { decreaseQuantity } = useProductContext();

  // Render a button element with a specific class for styling
  return (
    <button
      // Attach an onClick event handler to execute the decreaseQuantity function with the provided product
      onClick={() => {
        decreaseQuantity(product);
      }}
      // Apply a custom class for styling purposes
      className="quantity-btn"
    >
      {/* Render an icon representing a decrease action */}
      <i className="bi bi-dash-circle-fill"></i>
    </button>
  );
}
