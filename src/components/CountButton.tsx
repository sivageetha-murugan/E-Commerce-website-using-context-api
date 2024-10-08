import Button from "./Button";
import { useAppContext } from "../context/AppContext";
import { CountButtonProps } from "../type/Type";
import { actionTypes } from "../enums/actions";

function CountButton({ item, count, variant, className }: CountButtonProps) {
  const { dispatch } = useAppContext();
  return (
    <>
      <Button variant={variant} onClick={() => dispatch({ type: actionTypes.DECREASE_COUNT_IN_CART, payload: { productId: item.id } })}>
        -
      </Button>
      <div className={`${className}`}>
        <div>{count}</div>
      </div>
      <Button variant={variant} onClick={() => dispatch({ type: actionTypes.ADD_ITEM_TO_CART, payload: { productDetail: item } })}>
        +
      </Button>
    </>
  );
}

export default CountButton;
