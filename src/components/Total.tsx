import { contextProvider } from '../context/AppContext';

function Total() {
  const { cartItems } = contextProvider()
  let total = 0;
  cartItems.map((element) => (total = total + element.count * element.price));
  return (
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
  )
}

export default Total