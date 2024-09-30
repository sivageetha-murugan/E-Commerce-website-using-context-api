import ring01 from '../assets/ring-02.jpg'
function Product() {
  interface item {
    id: string,
    name: string,
    price: number,
    img: string
  }
  const productList: item[] = [
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    }
  ]
  return (
    <>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        {productList.map(item => (
          <div className='h-80 w-60 border border-slate-300 flex flex-col gap-y-2'>
            <div>
              <img src={item.img} alt={item.name} className='h-w-15'/>
            </div>
            <div className='ms-3 text-lg font-medium'>{item.name}</div>
            <div className='ms-3 mt-0 flex gap-20'>
              <p>₹ {item.price}</p>
              <button className='bg-stone-300 p-1 m-1 rounded-md mt-0 text-xs px-2'>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Product