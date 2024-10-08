import { useAppContext } from "../context/AppContext";
import OrderCartItems from "../components/OrderCartItems";
import calculateTotal from "../utils/CalculateTotal";

function OrderPage() {
  const { state } = useAppContext();
  const { total } = calculateTotal();

  return (
    <div className="w-4/6 flex flex-col justify-between space-y-4 mx-auto">
      <div className="h-28 font-medium text-xl flex justify-center pt-4">
        Thank you. Your order has been received.
      </div>
      <div className="h-24 w-full bg-orange-50 flex items-center gap-5 ps-5">
        <div className="flex flex-col">
          <div className="font-thin text-base">Order number:</div>
          <div className="font-medium text-base">1177</div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-base">Date:</div>
          <div className="font-medium text-base">October 3, 2024</div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-base">Total</div>
          <div className="font-medium text-base">{total}</div>
        </div>
        <div className="flex flex-col">
          <div className="font-thin text-base">Payment method:</div>
          <div className="font-medium text-base">Cash on delivery</div>
        </div>
      </div>
      <div className="">
        <div className="h-28 text-xl font-medium pt-5">ORDER DETAILS</div>
        <table className="w-full rounded-md border-collapse border table-fixed">
          <thead>
            <tr className="border-b border-gray-200 h-12">
              <th className="text-left p-3 w-3/4 text-md font-normal">
                Product
              </th>
              <th className="text-right p-3 w-1/4 text-md font-normal">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {state.cartItems.map((element) => (
              <OrderCartItems element={element} />
            ))}
            <tr className="border-t border-gray-200">
              <td className="text-left text-md p-3 h-16 w-3/4 ">SubTotal:</td>
              <td className="text-right text-md p-3 h-16 w-3/4 ">${total}</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-left text-md p-3 h-16 w-3/4 ">
                Payment method:
              </td>
              <td className="text-right text-md p-3 h-16 w-3/4 ">
                Cash on delivery
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-left text-lg font-bold p-3 h-16 w-3/4 ">
                Total:
              </td>
              <td className="p-3 text-right text-lg font-bold h-16 w-3/4 ">
                ${total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-96">
        <div className="h-20 text-xl font-medium pt-4">BILLING ADDRESS</div>
        <div className="space-y-1">
          <div>gehu ihrj</div>
          <div>kviufs</div>
          <div>23</div>
          <div>siue</div>
          <div>lskfi, hfwiur 09876</div>
          <div className="flex gap-2">
            <i className="bi bi-telephone"></i>
            <div>9080980989</div>
          </div>
          <div className="flex gap-2">
            <i className="bi bi-envelope"></i>
            <div>raja@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
