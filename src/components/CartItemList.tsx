import { contextProvider } from '../context/AppContext';
import Button from './Button';
import Total from './Total.tsx';

function CartItemList() {
  const { cartItems, decreaseCountInCart, addItemToCart, removeCartItem } = contextProvider();
  return (
    <div className="flex p-3 gap-3">
        <div className="w-3/4">
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-gray-700 bg-rose-100 text-base">
                <tr>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">Product</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Quantity</th>
                  <th scope="col" className="px-6 py-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((element) => (
                  <tr key={element.id} className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <td className="px-6 py-4">
                      <Button className='border rounded-full p-1' onClick={() => {removeCartItem(element)}}>
                        ✖                
                      </Button>
                    </td>
                    <td className="px-6 py-4">
                      <img src={element.img} alt={element.name} className="h-16 w-16 object-cover" />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {element.name}
                    </td>
                    <td className="px-6 py-4">${element.price}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Button className="h-8 w-8 border" onClick={() => decreaseCountInCart(element.id)}>-</Button>
                        <div className="h-8 w-8 border text-center">
                          <div className="mt-1">{element.count}</div>
                        </div>
                        <Button className="h-8 w-8 border" onClick={() => addItemToCart(element)}>+</Button>
                      </div>
                    </td>
                    <td className="px-6 py-4">{element.count * element.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Total/>
      </div>

  )
}

export default CartItemList