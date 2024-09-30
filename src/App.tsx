import './App.css'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage'
import { AppContextProvider } from './context/AppContext'

function App() {

  return (
    <>
      <BrowserRouter>
      <AppContextProvider>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/Home' element={<HomePage/>}/>
          <Route path='/Cart' element={<CartPage/>}/>
        </Routes>
      </AppContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
