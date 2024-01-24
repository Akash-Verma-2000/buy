import "./OrderPage.css";

export default function OrdersPage() {
  return (
    <>
      <div className="container-fluid  ">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <h1 className="text-primary text-center my-5">Your Orders</h1>
            <h5>Orderd On:22-01-2024</h5>
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">T-Shirt</td>
                  <td>&#8377; 299</td>
                  <td>3</td>
                  <td>&#8377; 9898</td>
                </tr>
                <tr>
                  <td scope="row"></td>
                  <td></td>
                  <td></td>
                  <td>&#8377; 9898</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
