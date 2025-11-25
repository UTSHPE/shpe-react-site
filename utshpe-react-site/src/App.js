import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </Router>
  );
}

export default App;
