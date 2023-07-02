


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { PagePresence } from "./pages/Professors/Components/Presence";
import { ProtectedRouterProfessor } from "./Auth/ProtectRouters";
import { Login } from "./pages/Users/Login";
import { AuthProvider } from "./Auth/AuthContext";
import { PageSections } from "./pages/Professors";
import { Section } from "./pages/Professors/Components/Section/Section";
import { Logout } from "./pages/Users/Logout";
import { NavBarPresences } from "./pages/Professors/Components/Presence/Components/NavBarPresence";



export const App = () => {

    return <React.StrictMode>
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/professors/self/:professorCode" element={<>
                        <ProtectedRouterProfessor>
                            <PageSections />
                        </ProtectedRouterProfessor>
                    </>} />

                    <Route path="/professors/self/:professorCode/sections/:id" element={<>
                        <ProtectedRouterProfessor>
                            <Section />
                        </ProtectedRouterProfessor>
                    </>} />

                    <Route path="/professors/self/:professorCode/sections/:id/presences" element={<>
                        <ProtectedRouterProfessor>
                            <PagePresence />
                        </ProtectedRouterProfessor>
                    </>} />
                    


                </Routes>
            </Router>
        </AuthProvider>
    </React.StrictMode>
}