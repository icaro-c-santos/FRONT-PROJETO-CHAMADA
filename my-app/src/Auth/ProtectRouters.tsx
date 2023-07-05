import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { Login } from "../pages/Users/Login";

export const ProtectedRouterProfessor = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { userLogged } = useContext(AuthContext);

    return userLogged.codeProfessor != null && userLogged.codeProfessor > 0 && userLogged.isLoggedIn ? <>{children}</> : <Login />;
};

export const ProtectedRouterStudent = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { userLogged } = useContext(AuthContext);

    return userLogged.enrolment != null && userLogged.enrolment > 0 && userLogged.isLoggedIn ? <>{children}</> : <Login />;
};
