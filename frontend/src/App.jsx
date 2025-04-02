import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summarizer from "./components/Summarizer.jsx";
import Navbar from "./components/Navbar.jsx"; // Import Navbar

export default function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Summarizer />} />
      </Routes>
    </Router>
  );
}
