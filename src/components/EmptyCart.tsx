import { HOMEPATH } from "../utils/constants";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col gap-3">
      <div className="text-xl w-full bg-gray-200 h-16 p-3 px-3">
        Your cart is empty
      </div>
      <div>
        <Button
          className="p-3 text-sm border tracking-widest"
          onClick={() => navigate(HOMEPATH)}
        >
          RETURN TO SHOP
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
