import { Box, Button, TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import clientAuth from "./ClientAuth";
import AlertDialog from "./ModalError";
import { AuthContext } from "../../Auth/AuthContext";

export const Login = () => {

    const { userLogged, setUserLogged } = useContext(AuthContext);
    const [isValidLogin, setIsValidLogin] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassowrd] = useState("");
    const [errorTextLogin, setErrorTextLogin] = useState("");
    const [messageAlert, setMessageAlert] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    userLogged.isLoggedIn && navigate("/");

    useEffect(() => {
        login.length <= 0 && setIsValidLogin(true);
    }, []);

    if (userLogged != null && userLogged.isLoggedIn == true) {
        if (userLogged.enrolment != null && userLogged.enrolment > 0) {
            navigate(`/students/self/${userLogged.enrolment}`)
        } else if (userLogged.code != null && userLogged.code > 0) {
            navigate(`/professors/self/${userLogged.code}`)
        }
    }

    userLogged.isLoggedIn && navigate("/");
    const validLogin = (value: string) => {
        if (value.length <= 0) {
            setIsValidLogin(false);
            setErrorTextLogin("LOGIN NÃO PODE FICAR EM BRANCO!");
        } else {
            setIsValidLogin(true);
            setErrorTextLogin("");
        }

        return true;
    };

    const handlerButtonLogin = async () => {
        try {
            if (login.length <= 0) {
                throw new Error("DIGITE SEU LOGIN!");
            }
            if (password.length <= 0) {
                throw new Error("DIGITE SUA SENHA!");
            }
            const user = await clientAuth.loginUser({
                login: login,
                password: password,
            });


            user.isLoggedIn = true;

            setUserLogged(user);

            localStorage.setItem("userLogged", JSON.stringify(user));
            console.log(user);
            if (user.enrolment != null && user.enrolment > 0) {
                navigate(`/students/self/${user.enrolment}`)
            } else if (user.code != null && user.code > 0) {
                navigate(`/professors/self/${user.code}`)
            }

        } catch (error: any) {
            setOpenModal(true);
            setMessageAlert(error.message);
        }
    };

    const handlerLogin = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setLogin(event.target.value);
        validLogin(event.target.value);
    };

    const handlerPassword = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setPassowrd(event.target.value);
        validLogin(login);
    };

    return (
        <Box minHeight={"534.5px"}>
            <AlertDialog
                message={messageAlert}
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
            <Box sx={{ display: "flex", justifyContent: "center", fontWeight: "bold", padding: "20px", fontSize: "40px" }}>SISTEMA DE CHAMDAS - UFBA</Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    margin: "50px auto",
                    justifyContent: "center",
                    bgcolor: "#e6e6e6",
                    padding: "40px",
                    borderRadius: "25px",
                    gap: "20px",
                    boxShadow: "0px 2px 13px 0px #0000008f",
                }}
            >
                <Box
                    sx={{
                        gap: "20px",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <TextField
                        placeholder="Login"
                        onChange={handlerLogin}
                        value={login}
                        error={!isValidLogin}
                        helperText={errorTextLogin}
                    ></TextField>
                    <TextField
                        placeholder="Senha"
                        onChange={handlerPassword}
                        value={password}
                        type={"password"}
                    ></TextField>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Button
                        variant="outlined"
                        sx={{ padding: "10px", borderRadius: "10px", display: "flex", width: "100%" }}
                        onClick={handlerButtonLogin}
                    >
                        Entrar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};