import { useAppContext } from "../context/AppContext";
import calculateTotal from "../utils/CalculateTotal";
import CheckOutCartItems from "./CheckOutList";

function CartItemsInCheckout() {
  const { state } = useAppContext();
  const { total } = calculateTotal();
  return (
    <div className="w-2/5 p-4 ">
      <div className="text-lg h-10 w-56">YOUR ORDER</div>
      <table className="w-full rounded-md border-collapse border table-fixed">
        <thead>
          <tr className="border-b border-gray-200 h-12">
            <th className="text-left p-3 w-3/4 text-md font-medium">Product</th>
            <th className="text-right p-3 w-1/4 text-md font-medium">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {state.cartItems.map((element) => (
            <CheckOutCartItems element={element} />
          ))}
          <tr className="border-t border-gray-200">
            <td className="text-left text-md p-3 h-16 w-3/4 ">SubTotal</td>
            <td className="text-right text-md p-3 h-16 w-3/4 ">{total}</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="text-left text-lg font-bold p-3 h-16 w-3/4 ">
              Total
            </td>
            <td className="p-3 text-right text-lg font-bold h-16 w-3/4 ">
              ${total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartItemsInCheckout;
