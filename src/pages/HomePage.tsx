import Product from '../components/Product'
import { contextProvider } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function HomePage() {
  const { categories } = contextProvider()
  const navigate = useNavigate();
  return (
    <>
      <div className='p-8'>
        {categories.map(element =>
          <div className='mt-8 '>
            <div className='p-4 flex  justify-between items-center me-4'>
              <div className='text-4xl font-bold uppercase'>{element.name}</div>
              <Button className='' onClick={() => navigate(`/category/${element.name}`)}>Viewmore</Button>
            </div>
            <Product category={element.name} page="Home" />
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage