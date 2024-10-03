import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { AppContextProvider } from "./context/AppContext";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<NavBar />}>
              <Route path="/Home" element={<HomePage page="Home" />} />
              <Route path="/Cart" element={<CartPage />} />
              <Route path="/category">
                <Route
                  path="Rings"
                  element={<ProductPage page="Rings" category="Rings" />}
                />
                <Route
                  path="Bracelets"
                  element={<ProductPage page="Bracelets" category="Bracelets" />}
                />
                <Route
                  path="Earrings"
                  element={<ProductPage page="Earrings" category="Earrings" />}
                />
                <Route
                  path="Necklaces"
                  element={<ProductPage page="Necklaces" category="Necklaces" />}
                />
              </Route>
            </Route>
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
