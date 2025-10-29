// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CanvasIndex from "./canvas_index";
import CanvasPageSample1 from "./canvas/sample1";
import CanvasPageSample2 from "./canvas/sample2";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canvas" element={<CanvasIndex />} />
        <Route path="/canvas/sample1" element={<CanvasPageSample1 />} />
        <Route path="/canvas/sample2" element={<CanvasPageSample2 />} />
      </Routes>
    </Router>
  );
}

export default App;
