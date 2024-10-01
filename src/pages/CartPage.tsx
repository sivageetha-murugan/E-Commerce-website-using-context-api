import { contextProvider } from "../context/AppContext";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import CartItemList from "../components/CartItemList";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const { cartItems } = contextProvider();
  let total = 0;
  cartItems.map((element) => (total = total + element.count * element.price));

  return (
    <>
      <NavBar />
      <div className="flex flex-col mb-4">
        <div className="h-32 p-4 text-2xl font-medium">
          <div className="mt-4 ms-2">CART</div>
        </div>
        <div className="flex justify-center items-center h-14 gap-2">
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-2xl border text-center">1</div>
            <div>SHOPPING CART</div>
          </div>
          <div>
            {">"}
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-2xl border text-center">2</div>
            <div>CHECKOUT DETAILS</div>
          </div>
          <div>
            {">"}
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-2xl border text-center">3</div>
            <div>ORDER COMPLETE</div>
          </div>
        </div>
      </div>
      {
        cartItems.length > 0 ? <CartItemList/> : <div className="p-5 flex flex-col gap-3"><div className="text-xl w-full bg-gray-200 h-16 p-3 px-3">Your cart is empty</div>
        <div><Button className="p-3 text-sm border tracking-widest" onClick={() => navigate('/Home')}>RETURN TO SHOP </Button></div></div>
      }
      
    </>
  );
}

export default CartPage;
