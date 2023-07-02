import { createContext, useEffect, useState } from "react";

export type TAuthData = {
    login?: string;
    token?: string;
    name?: string;
    enrolment?: number,
    code?: number
    isLoggedIn?: boolean;
};

export type TAuthContext = {
    enrolment: boolean,
    code: boolean
    userLogged: TAuthData;
    setUserLogged: (userLogged: TAuthData) => void;
};

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const AuthProvider = (props: { children: any }) => {
    const [userLogged, setUserLogged] = useState<TAuthData>({});

    useEffect(() => {
        const data = localStorage.getItem("userLogged");
        if (data && !userLogged.isLoggedIn) {
            const user: TAuthData = JSON.parse(data);
            user.isLoggedIn && setUserLogged(user);
        }
    });

    return (

        <AuthContext.Provider value={{ userLogged, setUserLogged } as TAuthContext}>
            {props.children}
        </AuthContext.Provider>
    );
};

