import React, {useEffect} from 'react';
import {Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./fetchUsers";

const Users = () => {
    const { users, isLoading, error } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <Container>
            {isLoading && <div>Loading...</div>}
            {error && <div>error</div>}
            {users.map((item) => <Typography>{item.name}</Typography> )}
        </Container>
    );
};

export default Users;