import Button from "./Button";
import { useAppContext } from "../context/AppContext";
import { CartListProps } from "../type/Type";
import CountButton from "./CountButton";
import { useMemo } from "react";

function CartList({ element, key } : CartListProps) {

  const { removeCartItem } = useAppContext();
  const calculatePrice = useMemo(() => {
    const price = element.count * element.price
    return price;
  }, [element])

  return (
    <tr
      key={key}
      className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700"
    >
      <td className="px-6 py-4">
        <Button
          className="border rounded-full p-1"
          onClick={() => {
            removeCartItem(element);
          }}
        >
          ✖
        </Button>
      </td>
      <td className="px-6 py-4">
        <img
          src={element.img}
          alt={element.name}
          className="h-16 w-16 object-cover"
        />
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {element.name}
      </td>
      <td className="px-6 py-4">${element.price}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <CountButton
            item={element}
            count={element.count}
            variant="tertiary"
            className="h-8 w-8 border text-center p-1"
          />
        </div>
      </td>
      <td className="px-6 py-4">{calculatePrice}</td>
    </tr>
  );
}

export default CartList;
