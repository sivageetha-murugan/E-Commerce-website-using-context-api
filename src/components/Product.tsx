import { useAppContext } from "../context/AppContext";
import { ProductProps } from "../type/Type";
import Button from "./Button";
import { useState, useEffect } from "react";
import CountButton from "./CountButton";

function Product({ index, item } : ProductProps) {

  const { addItemToCart, cartItems } = useAppContext();
  const [cartItem, setCartItem] = useState(
    cartItems.find((element) => element.id === item.id)
  );
  useEffect(() => {
    setCartItem(cartItems.find((element) => element.id === item.id));
  }, [cartItems, item.id]);

  return (
    <>
      <div
        key={index}
        className="h-80 w-60 border border-slate-300 flex flex-col gap-y-2"
      >
        <div>
          <img src={item.img} alt={item.name} className="h-w-15" />
        </div>
        <div className="ms-3 text-lg font-medium">{item.name}</div>
        <div className="ms-3 mt-0 flex gap-20">
          <p>$ {item.price}</p>
          {!!cartItem && (
            <div className="flex items-center">
              <CountButton
                item={item}
                count={cartItem.count}
                variant="secondary"
                className="h-6 w-6 border text-center pt-1 text-xs"
              />
            </div>
          ) }
          { !!!cartItem && (
            <Button variant="primary" onClick={() => addItemToCart(item)}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
