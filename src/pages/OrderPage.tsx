import React from "react";
import { contextProvider } from "../context/AppContext";

function OrderPage() {
  const {calculateTotal} = contextProvider();
  return (
    <div className="w-4/6 bg-black flex flex-col justify-between mx-auto space-y-4">
      <div className="h-">
        Thank you. Your order has been received.
      </div>
      <div className="h-24 w-full bg-orange-50 p-2 flex">
        <div className="flex flex-col">
          <div>Order number:</div>
          <div>1177</div>
        </div>
        <div className="flex flex-col">
          <div>Date:</div>
          <div>October 3, 2024</div>
        </div>
        <div className="flex flex-col">
          <div>Total</div>
          <div>${calculateTotal.total}</div>
        </div>
        <div className="flex flex-col">
          <div>Payment method:</div>
          <div>Cash on delivery</div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
