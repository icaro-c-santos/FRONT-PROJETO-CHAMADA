import { useQuery } from "react-query";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { clientServer } from "../../../Client/Client";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthContext";

type setting = {
    name: string;
    path: string;
    handler: () => void;
};

export const NavBarStudents = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = React.useState<setting[]>([]);
    const { studentEnrolment, id } = useParams();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const { userLogged, setUserLogged } = React.useContext(AuthContext);

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
                        UFBA - {userLogged.name}
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
                                key={"logout"}
                                onClick={() => {
                                    navigate(`/students/self/${studentEnrolment}/`);
                                }}
                            >
                                <Typography textAlign="center">{"Turmas"}</Typography>
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
                        {
                            <Button
                                key={"logout"}
                                onClick={() => {
                                    navigate(`/students/self/${studentEnrolment}/`);
                                }}
                                sx={{ my: 2, color: "white", display: "block", marginLeft: "auto" }}
                            >
                                {"Turmas"}
                            </Button>
                        }

                        {
                            <Button
                                key={"logout"}
                                onClick={() => {
                                    navigate(`/logout`);
                                }}
                                sx={{ my: 2, color: "white", display: "block", marginLeft: "auto" }}
                            >
                                {"Logout"}
                            </Button>
                        }
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
