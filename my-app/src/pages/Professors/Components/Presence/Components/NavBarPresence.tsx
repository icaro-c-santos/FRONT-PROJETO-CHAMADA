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
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

type setting = {
    name: string;
    path: string;
    handler: () => void;
};

export const NavBarPresences = ({ setIsOpenPresence }: { setIsOpenPresence: (value: boolean) => void }) => {
    const navigate = useNavigate();
    const { professorCode, id } = useParams();

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
                            display: { xs: "none !important;", md: "flex !important;" },
                            fontFamily: "monospace !important;",
                            fontWeight: 900,
                            letterSpacing: ".3rem !important;",
                            color: "inherit !important;",
                            textDecoration: "none !important;",
                            "&:hover": {
                                cursor: "pointer !important;",
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

                            <Box sx={{ width: "100px" }} >
                                <MenuItem
                                    key={"turmas"}
                                    onClick={() => {
                                        navigate(`/professors/self/${professorCode}`);
                                    }}
                                    sx={{ width: "100%" }}
                                >
                                    <Typography textAlign="center">{"Turmas"}</Typography>
                                </MenuItem>

                            </Box>
                            <Box sx={{ width: "100px" }} >
                                <MenuItem
                                    key={"chamdas"}
                                    onClick={() => {
                                        setIsOpenPresence(true);
                                    }}
                                    sx={{ width: "100%" }}
                                >
                                    <Typography textAlign="center">{"Fazer Chamada"}</Typography>
                                </MenuItem>

                            </Box>


                            <Box sx={{ width: "100px" }} >
                                <MenuItem
                                    key={"logout"}
                                    onClick={() => {
                                        navigate(`/logout`);
                                    }}
                                    sx={{ width: "100%" }}
                                >
                                    <Typography textAlign="center">{"Logout"}</Typography>
                                </MenuItem>
                            </Box>
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
                        <Box sx={{ marginLeft: "10px", cursor: "pointer" }}>
                            <Button
                                key={"turmas"}
                                onClick={() => {
                                    navigate(`/professors/self/${professorCode}`);
                                }}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >{"Turmas"}
                            </Button>
                        </Box>
                        <Box sx={{ marginLeft: "10px", cursor: "pointer" }}>
                            <Button
                                key={"chamada"}
                                onClick={() => {
                                    setIsOpenPresence(true);
                                }}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >{"Fazer Chamada"}
                            </Button>
                        </Box>

                        <Box sx={{ marginLeft: "auto", "&:hover": { cursor: "pointer" } }}>
                            <Button
                                key={"logout"}
                                onClick={() => {
                                    navigate(`/logout`);
                                }}
                                sx={{ my: 2, color: "white", display: "block", marginLeft: "auto" }}
                            >{"Logout"}
                            </Button>
                        </Box>

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

}

