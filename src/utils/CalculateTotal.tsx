import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import { TotalValue } from "../type/Type";

export default function calculateTotal(): TotalValue  {
  const {cartItems} = useAppContext();

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.count * item.price, 0);
  }, [cartItems]);

  return {total}
}

