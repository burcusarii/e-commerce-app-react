import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signin from "./pages/auth/Signin";
import Singup from "./pages/auth/Signup";
import Products from "./pages/products";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <div id="content">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Singup />} />
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
