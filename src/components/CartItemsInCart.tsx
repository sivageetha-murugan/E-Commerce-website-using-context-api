import Button from "./Button";
import { contextProvider } from "../context/AppContext";
import { CartItem } from "../type/Type";

function CartItemsInCart(props: {element: CartItem}) {
  const {removeCartItem, decreaseCountInCart, addItemToCart} = contextProvider()
  return (
    <tr
      key={props.element.id}
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
      <td className="px-6 py-4">{props.element.count * props.element.price}</td>
    </tr>
  );
}

export default CartItemsInCart;
