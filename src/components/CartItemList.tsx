import React from 'react'
import { contextProvider } from '../context/AppContext';
import Button from './Button';

function CartItemList() {
  const { cartItems, decreaseCountInCart, addItemToCart } = contextProvider();
  let total = 0;
  cartItems.map((element) => (total = total + element.count * element.price));
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
                      <button>
                        <i className="bi bi-x-circle"></i>
                      </button>
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

        <div className="w-1/4 p-4 bg-rose-100 dark:bg-rose-100 h-56">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-base font-medium py-4">CART TOTALS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3">Subtotal</td>
                <td className="py-2">${total}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold px-3" >Total</td>
                <td className="py-2 font-semibold">${total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

  )
}

export default CartItemList