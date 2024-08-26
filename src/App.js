import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
