// Import necessary dependencies, including components and styles
import ProductCard from "../../../components/product-card/ProductCard";
import SideBar from "../../../components/side-bar/SideBar";
import "./HomePage.css";

// Import custom hook to access product-related context
import { useProductContext } from "../../../context/productContext";

// Define the HomePage component
export default function HomePage() {
  // Destructure values from the product context using the custom hook
  const {
    productsArray,
    addToCart,
    removeFromCart,
    totalProducts,
    searchResultArray,
    searchResultCount,
    setSearchValue,
  } = useProductContext();

  // Render the HomePage component
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light">
            {/* Sidebar component */}
            <SideBar />
          </div>

          {/* Main product section */}
          <div className="col-10  product-section">
            {/* Search input */}
            <input
              className="form-control my-5 border-primary border-1"
              type="search"
              placeholder="Search by name... "
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />

            {/* Display search results if available */}
            {searchResultArray.length ? (
              <>
                <h4 className="text-primary">
                  {/* Display the count of search results */}
                  Search Results: {searchResultCount}
                </h4>
                {/* Display the search results */}
                <div className="row p-3">
                  {searchResultArray.map((product, index) => {
                    return (
                      <ProductCard
                        key={index}
                        product={product}
                        quntityBTN={null}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                      />
                    );
                  })}
                </div>
                <hr />
              </>
            ) : null}

            {/* Display total products count */}
            <h4 className="text-primary">Total Products: {totalProducts}</h4>

            {/* Display the list of products */}
            <div className="row p-3">
              {productsArray.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    product={product}
                    quntityBTN={null}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
