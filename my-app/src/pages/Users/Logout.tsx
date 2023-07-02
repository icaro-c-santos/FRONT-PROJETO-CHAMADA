import clientAuth from "./ClientAuth"


export const Logout = () => {
    clientAuth.logoutUser();
    return <><h2>OBRIGADO E VOLTE SEMPRE!</h2></>
}