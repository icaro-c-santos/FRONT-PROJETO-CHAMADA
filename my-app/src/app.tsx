


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Section } from "./pages/Professors";
import React from "react";
import { Presence } from "./pages/Professors/Components/Presence";



export const App = () => {

    return <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<h2>Home</h2>} />
                <Route path="/professors/sections/:id" element={<Section />} />
                <Route path="/professors/sections/:id/presences" element={<Presence />} />
            </Routes>
        </Router>
    </React.StrictMode>
}