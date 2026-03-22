import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signin from "./Sign in/Signin";
import SignUp from "./Sign Up/SignUp";
import Products from "./Products/Products";
import About from "./About/About";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
