import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./pages/Teacher/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Section } from "./pages/Section";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sections/:id" element={<Section />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
