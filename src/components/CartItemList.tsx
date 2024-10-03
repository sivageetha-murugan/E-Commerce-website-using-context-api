import { contextProvider } from "../context/AppContext";
import Button from "./Button";
import CartItemsInCart from "./CartItemsInCart.tsx";
import Total from "./Total.tsx";

function CartItemList() {
  const { cartItems, decreaseCountInCart, addItemToCart, removeCartItem } =
    contextProvider();
  return (
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
              {cartItems.map((element) => (
                <CartItemsInCart element= {element}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Total />
    </div>
  );
}

export default CartItemList;
