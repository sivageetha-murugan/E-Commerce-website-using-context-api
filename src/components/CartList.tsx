import Button from "./Button";
import { contextProvider } from "../context/AppContext";
import { CartItem } from "../type/Type";
import { useMemo } from "react";
import CountButton from "./CountButton";

function CartList(props: { element: CartItem; key: string }) {
  const { removeCartItem } = contextProvider();

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
          <CountButton
            item={props.element}
            count={props.element.count}
            variant="tertiary"
            classList="h-8 w-8 border text-center p-1"
          />
        </div>
      </td>
      <td className="px-6 py-4">{calculatePrice.totalPrice}</td>
    </tr>
  );
}

export default CartList;
