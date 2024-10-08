import { useAppContext } from "../context/AppContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import CartItemsInCheckout from "../components/CartItemsInCheckout";
import { useState } from "react";
import { Order } from "../type/Type";
import InputField from "../components/InputField";
import calculateTotal from "../utils/CalculateTotal";
import { actionTypes } from "../enums/actions";

function CheckoutPage() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>();
  const [order, setOrder] = useState<Order>();
  const [orderNumber, setOrderNumber] = useState<number>();
  const [date, setDate] = useState<string>();
  const [totalAmount, setTotalAmount] = useState<number>();
  const [paymentMethod, setPaymentMethod] =
    useState<string>("Cash on delivery");
  const [companyName, setCompanyName] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [houseNo, setHouseNo] = useState<string>();
  const [street, setStreet] = useState<string>();
  const [town, setTown] = useState<string>();
  // const [state, setState] = useState<string>();
  const [code, setCode] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const { total } = calculateTotal();
  const handleCheckout = () => {
    dispatch({ type: actionTypes.COMPLETE_CHECKOUT, payload: true });
    navigate("/orders");
  };

  return (
    <div className="flex">
      <form className="w-3/5 p-4 space-y-5">
        <div className="text-lg border-b border-gray-200 h-10 w-56">
          CUSTOMER INFORMATION
        </div>
        <div>
          <InputField
            className="border border-gray-200 w-full rounded-md h-10 ps-3"
            type="text"
            placeholder="Username or Email Address*"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="text-lg border-b border-gray-200 h-10 w-full">
          BILLING DETAILS
        </div>
        <div className="flex gap-x-4">
          <InputField
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
            type="text"
            placeholder="First name*"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <InputField
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
            type="text"
            placeholder="Last name*"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <InputField
            className="border border-gray-200 w-full rounded-md h-10 ps-3"
            type="text"
            placeholder="Company name"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </div>
        <div className="flex gap-x-4">
          <InputField
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
            type="text"
            placeholder="House number and street name"
            value={houseNo}
            onChange={(event) => setHouseNo(event.target.value)}
          />
          <InputField
            type="text"
            placeholder="Apartment, suite, unit, etc.(optional)"
            className="border border-gray-200 w-1/2 rounded-md h-10 ps-3"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </div>
        <div className="flex gap-x-4">
          <InputField
            type="text"
            placeholder="Town/City*"
            className="border border-gray-200 w-1/3 rounded-md h-10 ps-3"
            value={town}
            onChange={(event) => setTown(event.target.value)}
          />
          <InputField
            type="text"
            placeholder="State"
            className="border border-gray-200 w-1/3 rounded-md h-10 ps-3"
            // value={state}
            // onChange={(event) => setState(event.target.value)}
          />
          <InputField
            type="text"
            placeholder="ZIP Code"
            className="border border-gray-200 w-1/3 rounded-md h-10 ps-3"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </div>
        <div>
          <InputField
            type="text"
            placeholder="Phone*"
            className="border border-gray-200 w-full rounded-md h-10 ps-3"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
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
                <InputField
                  type="radio"
                  name="paymentMethod"
                  id="dbf"
                  className=""
                  value={"Direct bank transfer"}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
              </td>
              <td className="pl-2 w-11/12">
                <label htmlFor="dbf">Direct bank transfer</label>
              </td>
            </tr>
            <tr className="border-b border-gray-200 h-1/2">
              <td className="p-4">
                <InputField
                  type="radio"
                  name="paymentMethod"
                  id="cod"
                  className=""
                  value={"Cash on delivery"}
                  onChange={(event) => setPaymentMethod(event.target.value)}
                />
              </td>
              <td className="pl-2">
                <label htmlFor="cod">Cash on delivery</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Button
            type="button"
            className="border border-black w-full font-medium text-base h-14 tracking-widest flex items-center justify-center gap-3"
            disabled={
              !(
                userName &&
                firstName &&
                lastName &&
                houseNo &&
                town &&
                phoneNumber &&
                paymentMethod
              )
            }
            onClick={() => {
              handleCheckout();
            }}
          >
            <i className="fa fa-solid fa-lock"></i>
            <div>PLACE ORDER ${total}</div>
          </Button>
        </div>
      </form>
      <CartItemsInCheckout />
    </div>
  );
}

export default CheckoutPage;
