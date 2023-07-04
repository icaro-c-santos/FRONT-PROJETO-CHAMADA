import { type } from "os";
import { TAuthData } from "../../Auth/AuthContext";
import { clientServer } from "../../Client/Client";

interface typeUserData extends TAuthData {
    password?: string;
}

interface user {
    login: string;
    password: string;
}

const loginUser = async (userDates: user): Promise<typeUserData> => {

    try {
        const user = await clientServer.login(userDates.login, userDates.password);
        if (!user) {
            throw new Error("ACESSO INVALIDO!");
        }
        return user;
    } catch (error) {
        throw error
    }


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