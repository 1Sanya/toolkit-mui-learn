import React from 'react';
import {AppBar, Container, Grid, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import ClassesShorthand from "../../styledComponents/MenuItem/MenuItem";

const Header = () => {
    return (
        <AppBar position='static' >
            <Toolbar>
                <Container>
                    <Grid py='1.5vh' container spacing={2} xs={12}>
                        <Grid item>
                            <Link style={{ textDecoration: 'none' }} to="/users">
                                <ClassesShorthand name='ssss'>
                                    Users
                                </ClassesShorthand>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link style={{ textDecoration: 'none' }} to="/counter">
                                <ClassesShorthand name='ssss'>
                                    Counter
                                </ClassesShorthand>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <ClassesShorthand name='ssss'>
                                    Goods
                                </ClassesShorthand>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;