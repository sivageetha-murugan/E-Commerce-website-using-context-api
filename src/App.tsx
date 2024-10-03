import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { AppContextProvider } from "./context/AppContext";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import CartItemList from "./components/CartItemList";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/">
              <Route path="/login" element={<LoginPage />} />
              <Route index element={<Navigate to="/login" />}></Route>
              <Route element={<NavBar />}>
                <Route path="/Home" element={<HomePage page="Home" />} />
                <Route element={<CartPage />}>
                  <Route path="/Cart" element={<CartItemList />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/orders" element={<OrderPage />} />
                </Route>
                <Route path="/category">
                  <Route
                    path="Rings"
                    element={<ProductPage page="Rings" category="Rings" />}
                  />
                  <Route
                    path="Bracelets"
                    element={
                      <ProductPage page="Bracelets" category="Bracelets" />
                    }
                  />
                  <Route
                    path="Earrings"
                    element={
                      <ProductPage page="Earrings" category="Earrings" />
                    }
                  />
                  <Route
                    path="Necklaces"
                    element={
                      <ProductPage page="Necklaces" category="Necklaces" />
                    }
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
