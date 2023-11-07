import LandingPage from "./pages/LandingPage";
import AllProductPage from "./pages/AllProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/allProducts" element={<AllProductPage />}></Route>
      </Routes>
    </Router>
  </div>
);

export default App;
