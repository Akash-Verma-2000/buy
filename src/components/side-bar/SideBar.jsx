import "./SideBar.css";

export default function SideBar() {
  return (
    <div className=" side-bar p-3">
      <h4 className="text-primary">Filters</h4>
      <label htmlFor="customRange1" className="form-label">
        Max Price:1999
      </label>
      <input type="range" className="form-range" id="customRange1" />

      <h4 className="text-primary">Category</h4>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Men's Clothing
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Women's Clothing
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Jewelery
        </label>
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Electronics
        </label>
      </div>
    </div>
  );
}
