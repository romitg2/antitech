import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Content from "./Content/Content";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
