import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProtectedRoute from "./pages/ProtectedRoute";
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
              <Route path="profile" element={<Profile />} />
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
