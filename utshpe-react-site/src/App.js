import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership"
import Aboutus from "./pages/AboutUs"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/about-us" element={<Aboutus />} />
      </Routes>
    </Router>
  );
}

export default App;
