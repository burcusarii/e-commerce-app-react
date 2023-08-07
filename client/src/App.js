import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";
import Basket from "./pages/Basket";
import AdminRoute from "./pages/AdminRoute";
import Admin from "./pages/Admin";
import Home from "./pages/Admin/Home";
import Orders from "./pages/Admin/Orders";

import AdminProducts from "./pages/Admin/AdminProducts";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:product_id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />

            <Route path="/" element={<ProtectedRoute />}>
              <Route path="basket" element={<Basket />} />
              <Route path="profile" element={<Profile />} />
              <Route path="/" element={<AdminRoute />}>
                <Route path="admin" element={<Admin />}>
                  <Route path="/admin" element={<Home />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="products" element={<AdminProducts />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function About() {
  return <div>About</div>;
}
export default App;
