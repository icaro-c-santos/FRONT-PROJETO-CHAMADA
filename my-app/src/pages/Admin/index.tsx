import { Box } from "@material-ui/core";
import { API_URL } from "../../env/env";
import ListSections, { TypeDataSection } from "./Components/ListSections"
import { ResponsiveAppBarAdmin } from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageSections } from "./Pages/Sections";

export const Admin = () => {
    return (
        <>
            <h1>Bem vindo!</h1>
        </>
    );
};