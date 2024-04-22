import React from "react";
import { AppBar, Grid, Stack, Toolbar } from "@mui/material";
import styles from '../../css/header.module.css'
import { NavLink } from "react-router-dom";
import logo from "../../css/images/logoBlue.png"
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <div>
            <AppBar className={styles.border} sx={{ bgcolor: "white" }} position="fixed" elevation={'0'}>
                <Toolbar className={styles.container}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={10}>
                            <Stack direction='row' spacing={10} alignItems="center">
                                <NavLink to="/"><img className={styles.logo} src={logo} alt=""/></NavLink>
                                <NavLink to="/home" className={styles.routerLink}>Home</NavLink>
                                <NavLink to="/explore" className={styles.routerLink}>Explore</NavLink>
                                <NavLink to="/search" className={styles.routerLink}>Dashboard</NavLink>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Stack direction='row' spacing={4} alignItems="center">
                                <NavLink to="/profile" className={styles.loginLink}>Log In</NavLink>
                                <Button variant="contained" style={{ backgroundColor: '#3683e3' }}
                                        // style={{ backgroundColor: 'rgb(255,103,225)' }}
                                >Sign Up</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}
