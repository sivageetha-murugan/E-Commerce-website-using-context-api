import { contextProvider } from "../context/AppContext"
import Button from "./Button";

function Product(props: { category: string, page: string }) {

  const { product, addItemToCart } = contextProvider();

  const products = product.filter(element => element.category === props.category)
  props.page === "Home" ? products.length = 4 : products

  return (
    <>
      <div className='flex flex-wrap gap-5 justify-center items-center pt-5'>
        {products.map((item, index) => (
          <>
            <div key={index} className='h-80 w-60 border border-slate-300 flex flex-col gap-y-2'>
              <div>
                <img src={item.img} alt={item.name} className='h-w-15' />
              </div>
              <div className='ms-3 text-lg font-medium'>{item.name}</div>
              <div className='ms-3 mt-0 flex gap-20'>
                <p>$ {item.price}</p>
                <Button className="bg-stone-300 p-1 m-1 rounded-md mt-0 text-xs px-2" onClick={() => addItemToCart(item)}>Add to cart</Button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Product