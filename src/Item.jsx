import React, { useEffect } from "react";
import { useState } from "react";
import CartContext from "./CartContext";
import { useContext } from "react";

function Item({ product }) {
  const { img, price } = product;
  const [qty, setQty] = useState(1);
  const [subTotal, setSubTotal] = useState(price);
  const { setTotal } = useContext(CartContext);

  const handleQtyDecmnt = () => {
    qty > 1 && [
      setQty((qty) => qty - 1),
      setSubTotal((subTotal) => subTotal - price),
      setTotal((total) => total - price),
    ];
  };

  const handleQtyIncremnt = () => {
    [
      setQty((qty) => qty + 1),
      setSubTotal((subTotal) => subTotal + price),
      setTotal((total) => total + price),
    ];
  };

  return (
    <tr>
      <td>
        <img className="img-fluid" src={img} alt="" style={{ width: 100 }} />
      </td>
      <td>&#8377;{price}.00</td>
      <td>
        <div className=" border border-2 rounded">
          <button
            onClick={handleQtyDecmnt}
            type="button"
            className="border-0  bg-white me-2 fs-3 "
          >
            -
          </button>
          {qty}
          <button
            onClick={handleQtyIncremnt}
            type="button"
            className="border-0  bg-white ms-2  fs-3"
          >
            +
          </button>
        </div>
      </td>
      <td>&#8377;{subTotal}.00</td>
    </tr>
  );
}

export default Item;
