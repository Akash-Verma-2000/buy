import Button from "../button/Button";
import DecreaseButton from "../button/DecreaseButton";
import IncreaseButton from "../button/IncreaseButton";

export default function ProductCard({ product, quntityBTN }) {
  return (
    <>
      <div className="col-3 my-3">
        <div className="card">
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>

            {quntityBTN ? (
              <div className="d-flex justify-content-between my-3">
                <h4 class="card-text my-3">&#8377; {product.price}</h4>

                <IncreaseButton />
                <h5 className="mt-3">2</h5>
                <DecreaseButton />
              </div>
            ) : (
              <h4 className="card-text my-3">&#8377; {product.price}</h4>
            )}
            <Button text={"Add To Cart"} />
          </div>
        </div>
      </div>
    </>
  );
}
