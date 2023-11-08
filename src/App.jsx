import LandingPage from "./pages/LandingPage";
import AllProductPage from "./pages/AllProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewAndFeatured from "./pages/NewAndFeatured";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
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
      </Routes>
    </Router>
  </div>
);

export default App;
