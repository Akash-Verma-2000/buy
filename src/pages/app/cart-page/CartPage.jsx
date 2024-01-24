import Button from "../../../components/button/Button";
import ProductCard from "../../../components/product-card/ProductCard";

export default function CartPage() {
  return (
    <div className="container">
      <h1 className="my-5 text-center text-primary">My Cart</h1>

      <div className="row">
        <div className="d-flex justify-content-between">
          <h3>Total Price: &#8377; 29999</h3>
          <Button />
        </div>
        <ProductCard />
        
      </div>
    </div>
  );
}
