// Import necessary components and hooks
import Button from "../button/Button";
import DecreaseButton from "../button/DecreaseButton";
import IncreaseButton from "../button/IncreaseButton";
import { useProductContext } from "../../context/productContext";

// Functional component for rendering product cards
export default function ProductCard({
  product,
  quntityBTN = null,
  addToCart = null,
  removeFromCart = null,
}) {
  // Use the useProductContext hook to access product-related context
  const { cartProductsArray } = useProductContext();

  // Variable to track if the product is already added to the cart
  let isAlreadyAdded = false;

  // Function to check if the product is already in the cart
  function isAddedToCart() {
    isAlreadyAdded = cartProductsArray.find((p) => p.id == product.id);
  }

  // Call the function to check if the product is added to the cart
  isAddedToCart();

  return (
    <>
      {/* Product card layout */}
      <div className="col-3 my-3">
        <div className="card">
          {/* Product image */}
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            {/* Product title */}
            <h5 className="card-title">{product.title}</h5>

            {/* Conditionally render quantity buttons if specified */}
            {quntityBTN ? (
              <div className="d-flex justify-content-between my-3">
                {/* Product price */}
                <h4 class="card-text my-3">$ {product.price}</h4>
                {/* Decrease quantity button */}
                <DecreaseButton product={product} />
                {/* Display product quantity */}
                <h5 className="mt-3">{product.quantity}</h5>
                {/* Increase quantity button */}
                <IncreaseButton product={product} />
              </div>
            ) : (
              // Display product price if quantity buttons are not specified
              <h4 className="card-text my-3">$ {product.price}</h4>
            )}

            {/* Conditionally render remove from cart button if specified */}
            {removeFromCart &&
            isAlreadyAdded &&
            localStorage.getItem("loggedInUserEmail") ? (
              <Button
                text={"Remove From Cart"}
                fn={removeFromCart}
                color={"danger"}
                product={product}
              />
            ) : null}

            {/* Conditionally render add to cart button if specified */}
            {addToCart &&
            localStorage.getItem("loggedInUserEmail") &&
            !isAlreadyAdded ? (
              <Button
                text={"Add To Cart"}
                fn={addToCart}
                color={"primary"}
                product={product}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
