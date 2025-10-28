// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CanvasIndex from "./canvas/index";
import CanvasPage1 from "./canvas/Page1";
import CanvasPage2 from "./canvas/Page2";
import CanvasPage3 from "./canvas/Page3";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canvas" element={<CanvasIndex />} />
        <Route path="/canvas/page1" element={<CanvasPage1 />} />
        <Route path="/canvas/page2" element={<CanvasPage2 />} />
        <Route path="/canvas/page3" element={<CanvasPage3 />} />
      </Routes>
    </Router>
  );
}

export default App;
