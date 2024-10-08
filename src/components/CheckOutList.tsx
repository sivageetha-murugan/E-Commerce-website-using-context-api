import { useMemo } from "react";
import { CheckOutListProps } from "../type/Type";

function CheckOutList({element} : CheckOutListProps) {
  
  const calculatePrice = useMemo(() => {
    const price = element.count * element.price
    return price;
  }, [element])

  return (
    <>
      <tr key={element.id} className="border-b border-gray-200">
        <td className="flex items-center p-3 h-28 w-3/4">
          <img
            src={element.img}
            alt={element.name}
            className="h-14 w-14 mr-2 rounded-md"
          />
          <div>
            {element.name} x {element.count}
          </div>
        </td>
        <td className="text-right p-3 w-1/4">
          <div>${calculatePrice}</div>
        </td>
      </tr>
    </>
  );
}

export default CheckOutList;
