export default function Button({ text, fn }) {
  return (
    <button
      onClick={() => {
        fn();
      }}
      type="button"
      className="btn btn-primary"
    >
      {text}
    </button>
  );
}
