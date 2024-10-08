import calculateTotal from "../utils/CalculateTotal";

function Total() {
  const { total } = calculateTotal();

  return (
    <div className="w-1/4 p-4 bg-orange-50 h-56">
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
            <td className="py-2 font-semibold px-3">Total</td>
            <td className="py-2 font-semibold">${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Total;
