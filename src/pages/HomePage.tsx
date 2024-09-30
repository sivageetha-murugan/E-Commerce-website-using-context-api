import NavBar from '../components/NavBar'
import Product from '../components/Product'

function HomePage() {
  return (
    <>
      <NavBar />
      <div className='p-8'>
        <Product />
      </div>
    </>
  )
}

export default HomePage