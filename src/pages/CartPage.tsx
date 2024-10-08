import { Outlet, NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function CartPage() {
  const { state } = useAppContext();
  return (
    <>
      <div className="flex flex-col mb-4">
        <div className="h-32 p-4 text-2xl font-medium">
          <div className="mt-4 ms-2">CART</div>
        </div>
        <div className="flex justify-center items-center h-14 gap-2 text-xl tracking-widest font-normal">
          <NavLink
            to="/Cart"
            className={({ isActive }) =>
              `flex gap-2 ${isActive ? "text-amber-700" : "text-zinc-400"}`
            }
          >
            {({ isActive }) => (
              <div className="flex gap-2">
                <div
                  className={`px-2 rounded-2xl border text-center text-light ${
                    isActive ? "bg-amber-700" : "bg-zinc-400"
                  }`}
                >
                  1
                </div>
                <div>SHOPPING CART</div>
              </div>
            )}
          </NavLink>
          <div>{">"}</div>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `flex gap-2 ${isActive ? "text-amber-700" : "text-zinc-400"}`
            }
          >
            {({ isActive }) => (
              <div className="flex gap-2">
                <div
                  className={`px-2 rounded-2xl border text-center text-light ${
                    isActive ? "bg-amber-700" : "bg-zinc-400"
                  }`}
                >
                  2
                </div>
                <div>CHECKOUT DETAILS</div>
              </div>
            )}
          </NavLink>
          <div>{">"}</div>
          <NavLink
            to={state.isCheckoutComplete ? "/orders" : "#"}
            className={({ isActive }) =>
              `flex gap-2 ${
                state.isCheckoutComplete
                  ? isActive
                    ? "text-amber-700"
                    : "text-zinc-400"
                  : "text-gray-400"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex gap-2">
                <div
                  className={`px-2 rounded-2xl border text-center text-light ${
                    state.isCheckoutComplete
                      ? isActive
                        ? "bg-amber-700"
                        : "bg-zinc-400"
                      : "bg-gray-300"
                  }`}
                >
                  3
                </div>
                <div>ORDER COMPLETE</div>
              </div>
            )}
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CartPage;
