import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className='h-20 w-full'>
        <div className='flex'>
          <div className='flex w-1/3 h-20 gap-x-6 justify-center items-center'>
            <div>
              <Link to="/Home">RINGS</Link>
            </div>

            <div><Link to="/Home">BRACELETS</Link></div>
            <div><Link to="/Home">EARRINGS</Link></div>
            <div><Link to="/Home">NECKLACES</Link></div>
          </div>
          <div className='flex w-1/3 h-20 items-center justify-center'>
            <Link to="/Home">
              <div className='flex flex-col items-center justify-center'>
                <div>BLINGG</div>
                <div>JEWELRY STORE</div>
              </div>
            </Link>
          </div>
          <div className='flex w-1/3 h-20 gap-x-6 justify-center items-center'>
            <div><Link to="/Home">HOME</Link></div>
            <div><Link to="/Home">ABOUT</Link></div>
            <div><Link to="/Home">CONTACT</Link></div>
            <div className='flex gap-x-6 justify-center items-center'>
              <div><Link to="/Home"><i className="bi bi-search"></i></Link></div>
              <div><Link to="/Cart"><i className="bi bi-cart"></i></Link></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar