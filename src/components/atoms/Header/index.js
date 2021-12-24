import React from 'react';
import {AppBar, Container, Grid, Toolbar, Button} from "@mui/material";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Button)`
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`

const Header = () => {
    return (
        <AppBar position='static' >
            <Toolbar>
                <Container>
                    <Grid py='1.5vh' container spacing={2} xs={12}>
                        <Grid item>
                            <Link style={{ textDecoration: 'none' }} to="/users">
                                <StyledButton name='ssss'>
                                    Users
                                </StyledButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link style={{ textDecoration: 'none' }} to="/counter">
                                <StyledButton name='ssss'>
                                    Counter
                                </StyledButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <StyledButton name='ssss'>
                                    Goods
                                </StyledButton>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;