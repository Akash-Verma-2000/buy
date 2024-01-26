// Functional component for a custom button
export default function Button({ text, fn, color, product = null }) {
  // Render a button element with specified properties
  return (
    <button
      // Attach an onClick event handler to execute the provided function with an optional product parameter
      onClick={() => {
        fn(product);
      }}
      // Set the button type to "button" to prevent form submission (default type is "submit")
      type="button"
      // Apply dynamic class based on the specified color
      className={`btn btn-${color}`}
    >
      {/* Display the button text */}
      {text}
    </button>
  );
}
