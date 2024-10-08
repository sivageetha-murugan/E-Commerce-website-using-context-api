import "../src/scss/app.scss";
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
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./router/PrivateRoute";
import {
  BASEPATH,
  BRACELETSPATH,
  CARTPATH,
  CATEGORYPATH,
  CHECKOUTPATH,
  EARRINGSPATH,
  HOMEPATH,
  LOGINPATH,
  NECKLACESPATH,
  ORDERSPATH,
  RINGSPATH,
} from "./utils/constants";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <AuthProvider>
            <Routes>
              <Route path={BASEPATH}>
                <Route path={LOGINPATH} element={<LoginPage />} />
                <Route index element={<Navigate to={LOGINPATH} />}></Route>
                <Route element={<NavBar />}>
                  <Route
                    path={HOMEPATH}
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
                    <Route path={CARTPATH} element={<CartItemList />} />
                    <Route path={CHECKOUTPATH} element={<CheckoutPage />} />
                    <Route path={ORDERSPATH} element={<OrderPage />} />
                  </Route>
                  <Route path={CATEGORYPATH}>
                    <Route
                      path={RINGSPATH}
                      element={
                        <PrivateRoute>
                          <ProductPage page="Rings" category="Rings" />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path={BRACELETSPATH}
                      element={
                        <PrivateRoute>
                          <ProductPage page="Bracelets" category="Bracelets" />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path={EARRINGSPATH}
                      element={
                        <PrivateRoute>
                          <ProductPage page="Earrings" category="Earrings" />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path={NECKLACESPATH}
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
