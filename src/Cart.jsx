import React from "react";
import Item from "./Item";
import { useContext, useEffect } from "react";
import CartContext from "./CartContext";

function Cart() {
  const { data, total, setTotal, discount, totalAmt, setTotalAmt } =
    useContext(CartContext);

  useEffect(() => {
    setTotal(
      data.reduce((accumulator, product) => accumulator + product.price, 0)
    );
  }, []);

  useEffect(() => {
    setTotalAmt(total + 50 - Math.round(discount * total));
  }, [total, discount]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-11 bg-white text-center ms-2 mt-3 mb-3 pt-2 pb-2 rounded  ">
          <h1>Your Cart Items</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-sm-12  bg-white text-center rounded shadow-lg ">
          <div>
            <table className="table table-sm table-borderless align-middle mt-3">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => {
                  return <Item key={product.id} product={product} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="col-md-4 ms-2 bg-white  border rounded   pt-3 justify-content-center"
          style={{ height: 300 }}
        >
          <div className="d-flex justify-content-between">
            <h6>Subtotal</h6>
            <h6>&#8377;{total}.00</h6>
          </div>

          <div className="d-flex justify-content-between">
            <h6>Shipping Fee (std.)</h6>
            <h6>&#8377;50.00</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Discount (5% over &#8377;2000)</h6>
            <h6>-&#8377;{Math.round(total * discount)}.00 </h6>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between">
              <h4>Total Amount </h4>
              <h4>&#8377;{Math.round(totalAmt)}.00 </h4>
            </div>

            <button className="btn btn-warning mt-2 opacity-80">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
