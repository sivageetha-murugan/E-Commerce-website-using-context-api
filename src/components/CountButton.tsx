import Button from "./Button";
import { useAppContext } from "../context/AppContext";
import { CountButtonProps } from "../type/Type";

function CountButton({ item, count, variant, className }: CountButtonProps) {
  const { decreaseCountInCart, addItemToCart } = useAppContext();
  return (
    <>
      <Button
        variant={variant}
        onClick={() => decreaseCountInCart(item.id)}
      >
        -
      </Button>
      <div className={`${className}`}>
        <div>{count}</div>
      </div>
      <Button variant={variant} onClick={() => addItemToCart(item)}>
        +
      </Button>
    </>
  );
}

export default CountButton;
