import Button from "./Button";
import { contextProvider } from "../context/AppContext";
import { Item } from "../type/Type";

function CountButton(props: {
  item: Item;
  count: number;
  variant: string;
  classList: string;
}) {
  const { decreaseCountInCart, addItemToCart } = contextProvider();
  return (
    <>
      <Button
        variant={props.variant}
        onClick={() => decreaseCountInCart(props.item.id)}
      >
        -
      </Button>
      <div className={`${props.classList}`}>
        <div>{props.count}</div>
      </div>
      <Button variant={props.variant} onClick={() => addItemToCart(props.item)}>
        +
      </Button>
    </>
  );
}

export default CountButton;
