import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sites/Home.jsx";
import Register from "./sites/Register.jsx";
import Login from "./sites/Login.jsx";
import NoPage from "./sites/NoPage.jsx";
import Offers from "./sites/Offers.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Reviews from "./sites/Reviews.jsx";
import OffersDetails from "./sites/OfferDetails.jsx"
function App() {
  return (
    <div className="m-0 p-0">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="offers" element={<Offers />} />
          <Route path="offers/:id" element={<OffersDetails />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
