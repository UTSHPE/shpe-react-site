import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership"
import Aboutus from "./pages/AboutUs"
import Shpetinas from "./pages/SHPEtinas.jsx"
import Sponsorship from "./pages/Sponsorship"
import Membership from "./pages/Membership"
import Construction from "./pages/Construction"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/shpetinas" element={<Shpetinas />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/resources" element={<Construction />} />
      </Routes>
    </Router>
  );
}

export default App;
