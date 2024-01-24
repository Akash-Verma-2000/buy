export default function Message({ messageObj }) {
  return (
    <div
      className={`alert alert-${messageObj.bg} alert-dismissible fade show my-5`}
      role="alert"
    >
      {messageObj.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
