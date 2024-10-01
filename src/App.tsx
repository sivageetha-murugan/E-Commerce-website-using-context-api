import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage'
import { AppContextProvider } from './context/AppContext'
import Product from './components/Product'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route element={<NavBar />}>
              <Route path='/Home' element={<HomePage />} />
              <Route path='/Cart' element={<CartPage />} />
              <Route path='/category'>
                <Route path='Rings' element={<Product page="Rings" category="Rings" />} />
                <Route path='Bracelets' element={<Product page="Bracelets" category="Bracelets" />} />
                <Route path='Earrings' element={<Product page="Earrings" category="Earrings" />} />
                <Route path='Necklaces' element={<Product page="Necklaces" category="Necklaces" />} />
              </Route>
            </Route>
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
