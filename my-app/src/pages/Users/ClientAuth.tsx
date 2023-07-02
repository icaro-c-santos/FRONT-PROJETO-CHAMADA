import { type } from "os";
import { TAuthData } from "../../Auth/AuthContext";

interface typeUserData extends TAuthData {
    password?: string;
}

interface user {
    login: string;
    password: string;
}

const loginUser = async (userDates: user): Promise<typeUserData> => {

    const user: typeUserData = {
        code: 2,
        name: "Daniela Barreto",
        enrolment: -1,
        login: "danielaBarreto@gmail.com",
        isLoggedIn: true,
        token: "xxasdsad123232",
    }
    if (!user) {
        throw new Error("USUARIO NÃO ENCONTRADO!");
    }
    return user;
};

const logoutUser = async () => {
    localStorage.removeItem("userLogged");
};

const autenticUser = async () => {
    return null;
};



const clientAuth = {
    loginUser,
    logoutUser,
};




export default clientAuth;