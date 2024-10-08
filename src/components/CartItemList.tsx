import { useAppContext } from "../context/AppContext";
import CartItemsInCart from "./CartItemsInCart.tsx";
import EmptyCart from "./EmptyCart.tsx";

function CartItemList() {
  const { cartItems } = useAppContext();
  return (
    <>
      {!!cartItems.length && <CartItemsInCart />}

      {!!!cartItems.length && <EmptyCart />}
    </>
  );
}

export default CartItemList;
