import { useMemo } from "react";
import { CartItem } from "../type/Type";

function OrderCartItems(props: { element: CartItem }) {
  const calculatePrice = useMemo(() => {
    const price = props.element.count * props.element.price;
    return { price };
  }, [props.element]);

  return (
    <tr key={props.element.id} className="border-b border-gray-200">
      <td className="flex items-center p-3 h-16 w-3/4">
        <div>{props.element.name} x</div>
        <div className="font-medium ms-1">{props.element.count}</div>
      </td>
      <td className="text-right p-3 w-1/4">
        <div>${calculatePrice.price}</div>
      </td>
    </tr>
  );
}

export default OrderCartItems;
