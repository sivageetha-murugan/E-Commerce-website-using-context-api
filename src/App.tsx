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
import { AuthProvider, PrivateRoute } from "./context/AuthProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <AuthProvider>
            <Routes>
              <Route path="/">
                <Route path="/login" element={<LoginPage />} />
                <Route index element={<Navigate to="/login" />}></Route>
                <Route element={<NavBar />}>
                  <Route
                    path="/Home"
                    element={
                      <PrivateRoute>
                        <HomePage page="Home" />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    element={
                      <PrivateRoute>
                        <CartPage />
                      </PrivateRoute>
                    }
                  >
                    <Route path="/Cart" element={<CartItemList />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/orders" element={<OrderPage />} />
                  </Route>
                  <Route path="/category">
                    <Route
                      path="Rings"
                      element={
                        <PrivateRoute>
                          <ProductPage page="Rings" category="Rings" />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="Bracelets"
                      element={
                        <PrivateRoute>
                          <ProductPage page="Bracelets" category="Bracelets" />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="Earrings"
                      element={
                        <PrivateRoute>
                          <ProductPage page="Earrings" category="Earrings" />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="Necklaces"
                      element={
                        <PrivateRoute>
                          <ProductPage page="Necklaces" category="Necklaces" />
                        </PrivateRoute>
                      }
                    />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
