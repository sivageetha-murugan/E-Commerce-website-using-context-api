import { contextProvider } from "../context/AppContext";
import { Item } from "../type/Type";
import Button from "./Button";
import { useState, useEffect } from "react";

function Product(props: { index: string; item: Item }) {
  const { addItemToCart, cartItems, decreaseCountInCart } = contextProvider();
  const [cartItem, setCartItem] = useState(
    cartItems.find((element) => element.id === props.item.id)
  );
  useEffect(() => {
    setCartItem(cartItems.find((element) => element.id === props.item.id));
  }, [cartItems, props.item.id]);
  return (
    <>
      <div
        key={props.index}
        className="h-80 w-60 border border-slate-300 flex flex-col gap-y-2"
      >
        <div>
          <img src={props.item.img} alt={props.item.name} className="h-w-15" />
        </div>
        <div className="ms-3 text-lg font-medium">{props.item.name}</div>
        <div className="ms-3 mt-0 flex gap-20">
          <p>$ {props.item.price}</p>
          {cartItem ? (
            <div className="flex items-center">
              <Button
                className="h-8 w-8 border"
                onClick={() => decreaseCountInCart(props.item.id)}
              >
                -
              </Button>
              <div className="h-8 w-8 border text-center">
                <div className="mt-1">{cartItem.count}</div>
              </div>
              <Button
                className="h-8 w-8 border"
                onClick={() => addItemToCart(props.item)}
              >
                +
              </Button>
            </div>
          ) : (
            <Button
              className="bg-stone-300 p-1 m-1 rounded-md mt-0 text-xs px-2"
              onClick={() => addItemToCart(props.item)}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
