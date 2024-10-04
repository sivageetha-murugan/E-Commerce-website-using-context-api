import { useMemo } from "react";
import { CartItem } from "../type/Type";

function CheckOutCartItems(props: {element: CartItem}) {
  const calculatePrice = useMemo(() => {
    const price = props.element.count * props.element.price
    return {price};
  }, [props.element])
  return (
    <>
      <tr key={props.element.id} className="border-b border-gray-200">
        <td className="flex items-center p-3 h-28 w-3/4">
          <img
            src={props.element.img}
            alt={props.element.name}
            className="h-14 w-14 mr-2 rounded-md"
          />
          <div>
            {props.element.name} x {props.element.count}
          </div>
        </td>
        <td className="text-right p-3 w-1/4">
          <div>${calculatePrice.price}</div>
        </td>
      </tr>
    </>
  );
}

export default CheckOutCartItems;
