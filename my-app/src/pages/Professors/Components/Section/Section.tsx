import { Box, Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import Professors from "../Professors";
import ListStudents from "../Students";
import Subject from "../Subject";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../../../env/env";
import { Student } from "../../../../Types/Students";
import ErrorModal from "../../../Compoments/ErrorModal";
import { Professor } from "../../../../Types/Professors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { clientServer } from "../../../../Client/Client";


export type StudentWithStatus = Student & { status: string, absences: number };
export type ScheduleDto = {
    code: number,
    start_time: string,
    end_time: string,
    day: number,
    sectionCode: number,
    roomCode: number
}
export type Typedata = {
    section: number,
    subjectName: string,
    subjectLoad: number,
    professors: Professor[],
    students: StudentWithStatus[]
    schedules: ScheduleDto[]

}

const fetchDataSection = async ({
    queryKey,
}: {
    queryKey: (string | undefined)[];
}): Promise<Typedata> => {
    const sectionId = queryKey[1] as string;
    return await clientServer.getDataSectionById(parseInt(sectionId));
};



export const Section = () => {
    const { id } = useParams();

    const { data, status, error } = useQuery(["data", id], fetchDataSection, { retry: 3 });
    const [isError, setIsError] = useState(false);

    const handleCloseModal = () => {
        setIsError(false);
    };

    useEffect(() => {
        if (error || status === "error") {
            setIsError(true);
        }
    }, [error, status]);


    return (
        <>
            <NavBarSectionsId />
            <Box>
                {isError && < ErrorModal errorMessage={"Desculpe mais ocorreu um erro interno!"} onClose={handleCloseModal}></ErrorModal>}
                <Box>
                    <Box>
                        {status === "success" && <Subject subjectLoad={data.subjectLoad} subjectName={data.subjectName}></Subject>}
                    </Box>
                    <Box>
                        {status === "success" && <Professors professors={data.professors}></Professors>}
                    </Box>
                </Box>
                {status === "success" && <ListStudents students={data.students} ></ListStudents>}
            </Box >
        </>
    );
};






type setting = {
    name: string;
    path: string;
    handler: () => void;
};

export const NavBarSectionsId = () => {
    const navigate = useNavigate();
    const { professorCode, id } = useParams();

    const [settings, setSettings] = useState<setting[]>([]);

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: "black" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => {
                            navigate(`/`);
                        }}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 900,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            "&:hover": {
                                cursor: "pointer",
                            },
                        }}
                    >
                        UFBA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >

                            <MenuItem
                                key={"turmas"}
                                onClick={() => {
                                    navigate(`/professors/self/${professorCode}`);
                                }}
                            >
                                <Typography textAlign="center">{"Turmas"}</Typography>
                            </MenuItem>
                            <MenuItem
                                key={"Chamada"}
                                onClick={() => {
                                    navigate(`/professors/self/${professorCode}/sections/${id}/presences`);
                                }}
                            >
                                <Typography textAlign="center">{"Chamadas"}</Typography>
                            </MenuItem>

                            <MenuItem
                                key={"logout"}
                                onClick={() => {
                                    navigate(`/logout`);
                                }}
                            >
                                <Typography textAlign="center">{"Logout"}</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        UFBA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button
                            key={"turmas"}
                            onClick={() => {
                                navigate(`/professors/self/${professorCode}`);
                            }}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >{"Turmas"}
                        </Button>
                        <Button
                            key={"turmas"}
                            onClick={() => {
                                navigate(`/professors/self/${professorCode}/sections/${id}/presences`);
                            }}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >{"Chamadas"}
                        </Button>
                        <Button
                            key={"logout"}
                            onClick={() => {
                                navigate(`/logout`);
                            }}
                            sx={{ my: 2, color: "white", display: "block", marginLeft: "auto" }}
                        >{"Logout"}
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >


                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
