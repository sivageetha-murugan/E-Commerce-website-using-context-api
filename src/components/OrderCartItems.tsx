import { useMemo } from "react";
import { OrderCartItemsProps } from "../type/Type";

function OrderCartItems({ element }: OrderCartItemsProps) {
  const calculatePrice = useMemo(() => {
    const price = element.count * element.price;
    return price;
  }, [element]);

  return (
    <tr key={element.id} className="border-b border-gray-200">
      <td className="flex items-center p-3 h-16 w-3/4">
        <div>{element.name} x</div>
        <div className="font-medium ms-1">{element.count}</div>
      </td>
      <td className="text-right p-3 w-1/4">
        <div>${calculatePrice}</div>
      </td>
    </tr>
  );
}

export default OrderCartItems;
