import { Outlet, Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div className="flex flex-col mb-4">
        <div className="h-32 p-4 text-2xl font-medium">
          <div className="mt-4 ms-2">CART</div>
        </div>
        <div className="flex justify-center items-center h-14 gap-2 text-xl tracking-widest font-normal text-amber-700">
          <Link to='/Cart'>
            <div className="flex gap-2">
              <div className="px-2 rounded-2xl border text-center">1</div>
              <div>SHOPPING CART</div>
            </div>
          </Link>
          <div>{">"}</div>
          <Link to="/checkout">
            <div className="flex gap-2">
              <div className="px-2 rounded-2xl border text-center">2</div>
              <div>CHECKOUT DETAILS</div>
            </div>
          </Link>
          <div>{">"}</div>
          <Link to="/orders">
            <div className="flex gap-2">
              <div className="px-2 rounded-2xl border text-center">3</div>
              <div>ORDER COMPLETE</div>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CartPage;
