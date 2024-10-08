import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import { TotalValue } from "../type/Type";

export default function calculateTotal(): TotalValue  {
  const {state} = useAppContext();

  const total = useMemo(() => {
    return state.cartItems.reduce((acc, item) => acc + item.count * item.price, 0);
  }, [state.cartItems]);

  return {total}
}

