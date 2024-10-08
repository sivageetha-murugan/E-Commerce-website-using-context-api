import { useAppContext } from "../context/AppContext";
import CartItemsInCart from "./CartItemsInCart.tsx";
import EmptyCart from "./EmptyCart.tsx";

function CartItemList() {
  const { state } = useAppContext();
  return (
    <>
      {!!state.cartItems.length && <CartItemsInCart />}

      {!!!state.cartItems.length && <EmptyCart />}
    </>
  );
}

export default CartItemList;
