import { Link, Outlet } from 'react-router-dom'
import { contextProvider } from '../context/AppContext'


function NavBar() {
  const { cartItems } = contextProvider()
  return (
    <>
      <nav className='h-20 w-full'>
        <div className='flex'>
          <div className='flex w-1/3 h-20 gap-x-6 justify-center items-center'>
            <div className='text-md font-light'><Link to="/category/Rings">RINGS</Link></div>
            <div className='text-md font-light'><Link to="/category/Bracelets">BRACELETS</Link></div>
            <div className='text-md font-light'><Link to="/category/Earrings">EARRINGS</Link></div>
            <div className='text-md font-light'><Link to="/category/Necklaces">NECKLACES</Link></div>
          </div>
          <div className='flex w-1/3 h-20 items-center justify-center'>
            <Link to="/Home">
              <div className='flex flex-col items-center justify-center'>
                <div className='text-xl font-medium'>BLINGG</div>
                <div className='text-xs font-thin'>JEWELRY STORE</div>
              </div>
            </Link>
          </div>
          <div className='flex w-1/3 h-20 gap-x-6 justify-center items-center'>
            <div className='text-md font-light'><Link to="/Home">HOME</Link></div>
            <div className='text-md font-light'><Link to="/Home">ABOUT</Link></div>
            <div className='text-md font-light'><Link to="/Home">CONTACT</Link></div>
            <div className='flex gap-x-6 justify-center items-center relative inline-block'>
              <div><Link to="/Home"><i className="bi bi-search"></i></Link></div>
              <div><Link to="/Cart"><i className="bi bi-cart"></i></Link>
                {cartItems.length > 0 && (
                  <span
                    className="absolute top-[-5px] right-[-10px] bg-red-600 text-white rounded-full text-xs px-[6px] py-[2px]">
                    {cartItems.length}
                  </span>
                )}</div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar