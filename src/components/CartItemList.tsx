import { contextProvider } from "../context/AppContext";
import CartList from "./CartList.tsx";
import Total from "./Total.tsx";
import Button from "./Button.tsx";
import { useNavigate } from "react-router-dom";

function CartItemList() {
  const { cartItems } = contextProvider();
  const navigate = useNavigate();
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="flex p-3 gap-3">
          <div className="w-3/4">
            <div className="relative overflow-x-auto ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 bg-rose-100 text-base">
                  <tr>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((element, index) => (
                    <CartList
                      element={element}
                      key={`${index} ${element.id}`}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Total />
        </div>
      ) : (
        <div className="p-5 flex flex-col gap-3">
          <div className="text-xl w-full bg-gray-200 h-16 p-3 px-3">
            Your cart is empty
          </div>
          <div>
            <Button
              className="p-3 text-sm border tracking-widest"
              onClick={() => navigate("/Home")}
            >
              RETURN TO SHOP
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default CartItemList;
