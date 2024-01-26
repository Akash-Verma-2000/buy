// Functional component for displaying a message
export default function Message({ messageObj }) {
  // Render a div with dynamic classes for styling based on the message's background color
  return (
    <div
      className={`alert alert-${messageObj.bg} alert-dismissible fade show my-5`}
      role="alert"
    >
      {/* Display the message content */}
      {messageObj.message}

      {/* Render a close button with Bootstrap styling */}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
