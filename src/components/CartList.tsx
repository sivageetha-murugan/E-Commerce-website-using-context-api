import Button from "./Button";
import { contextProvider } from "../context/AppContext";
import { CartItem } from "../type/Type";
import { useMemo } from "react";

function CartList(props: { element: CartItem,  key:string}) {
  const { removeCartItem, decreaseCountInCart, addItemToCart } =
    contextProvider();

  const calculatePrice = useMemo(() => {
    const totalPrice = props.element.count * props.element.price;
    return { totalPrice };
  }, [props.element.count, props.element.price]);

  return (
    <tr
      key={props.key}
      className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
    >
      <td className="px-6 py-4">
        <Button
          className="border rounded-full p-1"
          onClick={() => {
            removeCartItem(props.element);
          }}
        >
          ✖
        </Button>
      </td>
      <td className="px-6 py-4">
        <img
          src={props.element.img}
          alt={props.element.name}
          className="h-16 w-16 object-cover"
        />
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {props.element.name}
      </td>
      <td className="px-6 py-4">${props.element.price}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <Button
            className="h-8 w-8 border"
            onClick={() => decreaseCountInCart(props.element.id)}
          >
            -
          </Button>
          <div className="h-8 w-8 border text-center">
            <div className="mt-1">{props.element.count}</div>
          </div>
          <Button
            className="h-8 w-8 border"
            onClick={() => addItemToCart(props.element)}
          >
            +
          </Button>
        </div>
      </td>
      <td className="px-6 py-4">{calculatePrice.totalPrice}</td>
    </tr>
  );
}

export default CartList;
