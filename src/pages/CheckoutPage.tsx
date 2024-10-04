import { contextProvider } from "../context/AppContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CheckOutCartItems from "../components/CheckOutCartItems";

function CheckoutPage() {
  const { calculateTotal, cartItems } = contextProvider();
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="w-3/5 p-4 space-y-5">
        <div className="text-lg border-b border-gray-200 h-10 w-56">
          CUSTOMER INFORMATION
        </div>
        <div>
          <input
            type="text"
            placeholder="Username or Email Address*"
            className="border border-gray-200 w-full rounded-md h-10 ps-3"
          />
        </div>
        <div className="text-lg border-b border-gray-200 h-10 w-full">
          BILLING DETAILS
        </div>
        <div className="flex gap-x-4">
          <input
            type="text"
            placeholder="First name*"
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
          />
          <input
            type="text"
            placeholder="Last name*"
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Company name"
            className="border border-gray-200 w-full rounded-md h-10 ps-3"
          />
        </div>
        <div className="flex gap-x-4">
          <input
            type="text"
            placeholder="House number and street name"
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc.(optional)"
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
          />
        </div>
        <div className="flex gap-x-4">
          <input
            type="text"
            placeholder="Town/City*"
            className="border border-gray-200 w-1/3 rounded-md h-10 ps-3"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-200 w-1/3 rounded-md h-10 ps-3"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            className="border border-gray-200 w-1/3 rounded-md h-10 ps-3"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone*"
            className="border border-gray-200 w-full rounded-md h-10 ps-3"
          />
        </div>
        <div className="text-lg border-b border-gray-200 h-10 w-full">
          ADDITIONAL INFORMATION
        </div>
        <div>
          <textarea
            name=""
            id=""
            className="border border-gray-200 w-full rounded-md h-16 ps-3 pt-2"
            placeholder="Notes about your order, e.g. special notes for delivery"
          ></textarea>
        </div>
        <div className="text-lg border-b border-gray-200 h-10 w-full">
          PAYMENT
        </div>
        <table className="border border-gray-200 w-full rounded-sm p-2 h-28">
          <tbody>
            <tr className="border-b border-gray-200 h-1/2">
              <td className="p-4 w-1/12">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="dbf"
                  className=""
                />
              </td>
              <td className="pl-2 w-11/12">
                <label htmlFor="dbf">Direct bank transfer</label>
              </td>
            </tr>
            <tr className="border-b border-gray-200 h-1/2">
              <td className="p-4">
                <input type="radio" name="paymentMethod" id="cod" />
              </td>
              <td className="pl-2">
                <label htmlFor="cod">Cash on delivery</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Button
            type="submit"
            className="border border-black w-full font-medium text-base h-14 tracking-widest flex items-center justify-center gap-3"
            onClick={() => {
              navigate("/orders");
            }}
          >
            <i className="fa fa-solid fa-lock"></i>
            <div>PLACE ORDER ${calculateTotal.total}</div>
          </Button>
          <button type="submit"></button>
        </div>
      </div>
      <div className="w-2/5 p-4 ">
        <div className="text-lg h-10 w-56">YOUR ORDER</div>
        <table className="w-full rounded-md border-collapse border table-fixed">
          <thead>
            <tr className="border-b border-gray-200 h-12">
              <th className="text-left p-3 w-3/4 text-md font-medium">
                Product
              </th>
              <th className="text-right p-3 w-1/4 text-md font-medium">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((element) => (
              <CheckOutCartItems element={element}/>
            ))}
            <tr className="border-t border-gray-200">
              <td className="text-left text-md p-3 h-16 w-3/4 ">SubTotal</td>
              <td className="text-right text-md p-3 h-16 w-3/4 ">
                ${calculateTotal.total}
              </td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-left text-lg font-bold p-3 h-16 w-3/4 ">
                Total
              </td>
              <td className="p-3 text-right text-lg font-bold h-16 w-3/4 ">
                ${calculateTotal.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckoutPage;
