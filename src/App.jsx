import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewAndFeatured from "./pages/NewAndFeatured";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Product from "./pages/Product";
import Nav from "./Components/Nav";

const App = () => (
  <div>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {/* <Route path="/allProducts" element={<AllProductPage />}></Route> */}
        <Route path="/NewAndFeatured" element={<NewAndFeatured />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />}></Route>
        </Route>
      </Routes>
    </Router>
  </div>
);

export default App;
