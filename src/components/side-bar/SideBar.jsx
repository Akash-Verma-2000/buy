// Import styling for SideBar component
import "./SideBar.css";

// Import necessary hooks and components
import { useProductContext } from "../../context/productContext";

// SideBar component for displaying filters and categories
export default function SideBar() {
  // Destructure necessary functions and state from the product context
  const { setMenCat, setWomCat, setJelCat, setEleCat, setMaxPrice, maxPrice } =
    useProductContext();
  return (
    <div className=" side-bar p-3">
      {/* Filter section title */}
      <h4 className="text-primary">Filters</h4>
      {/* Max Price range input */}
      <label htmlFor="customRange1" className="form-label">
        Max Price: $ {maxPrice}
      </label>
      <input
        type="range"
        className="form-range"
        id="customRange1"
        min={0}
        max={1200}
        value={maxPrice}
        onChange={(e) => {
          setMaxPrice(e.target.value);
        }}
      />
      {/* Category section title */}
      <h4 className="text-primary">Category</h4>

      {/* Checkbox for Men's Clothing category */}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={() => {
            setMenCat((prev) => !prev);
          }}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Men's Clothing
        </label>
      </div>

      {/* Checkbox for Women's Clothing category */}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={() => {
            setWomCat((prev) => !prev);
          }}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Women's Clothing
        </label>
      </div>

      {/* Checkbox for Jewelry category */}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={() => {
            setJelCat((prev) => !prev);
          }}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Jewelery
        </label>
      </div>

      {/* Checkbox for Electronics category */}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={() => {
            setEleCat((prev) => !prev);
          }}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Electronics
        </label>
      </div>
    </div>
  );
}
