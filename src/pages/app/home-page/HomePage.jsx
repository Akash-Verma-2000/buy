import ProductCard from "../../../components/product-card/ProductCard";
import SideBar from "../../../components/side-bar/SideBar";
import "./HomePage.css";
import { useProductContext } from "../../../context/productContext";

export default function HomePage() {
  const { productsArray } = useProductContext();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light">
            <SideBar />
          </div>

          <div className="col-10  product-section">
            <input
              className="form-control my-5 border-primary border-1"
              type="search"
              placeholder="Search by name... "
            />
            <div className="row p-3">
              {productsArray.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    product={product}
                    quntityBTN={null}
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
