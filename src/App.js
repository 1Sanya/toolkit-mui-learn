import React from 'react';
import Counter from "./features/counter/Counter";
import {Link, Route, Routes} from 'react-router-dom'
import Users from "./features/users/Users";
import Goods from "./features/goods/Goods";
import {Container, Grid, MenuItem, MenuList, Paper} from "@mui/material";
import ClassesShorthand from "./styledComponents/MenuItem/MenuItem";

const App = () => {
    return (
        <>
            <Container>
                    <Grid style={{marginBottom: '4vh'}} container spacing={2} xs={12}>
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
            <Routes>
                <Route path='/users' element={<Users />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/' element={<Goods />} />
            </Routes>
        </>
    );
};

export default App;