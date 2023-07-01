


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Section } from "./pages/Professors";
import React from "react";
import { Presence } from "./pages/Professors/Components/Presence";
import { Admin } from "./pages/Admin";
import ResponsiveAppBarAdmin from "./pages/Admin/Components/Navbar";
import { PageSections } from "./pages/Admin/Pages/Sections";
import { PageSectionId } from "./pages/Admin/Pages/SectionId";



export const App = () => {

    return <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<>
                    <span />
                    <h2>Bem vindo!</h2></>} />
                <Route path="/professors/sections/:id" element={<>
                    <span />
                    <Section /></>} />
                <Route path="/professors/sections/:id/presences" element={<Presence />} />
                <Route path="/admin/" element={
                    <>
                        <ResponsiveAppBarAdmin />
                        <Admin />
                    </>
                } />
                <Route path="/admin/sections" element={
                    <>
                        <ResponsiveAppBarAdmin />
                        <PageSections />
                    </>
                } />
                <Route path="/admin/sections/:id" element={
                    <>
                        <ResponsiveAppBarAdmin />
                        <PageSectionId />
                    </>
                } />
                <Route path="/admin/professors" element={
                    <>
                        <ResponsiveAppBarAdmin />

                    </>
                } />
                <Route path="/admin/students" element={
                    <>
                        <ResponsiveAppBarAdmin />

                    </>
                } />
            </Routes>
        </Router>
    </React.StrictMode>
}