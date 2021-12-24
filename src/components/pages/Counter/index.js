import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Grid, Typography} from "@mui/material";
import {decrement, increment, incrementByAmount} from "../../../redux/slices/counterSlice";
import {incrementAsync} from "../../../redux/thunk/incrementAsync";
import {counter} from "../../../redux/slices/counterSlice";

const Counter = () => {
  const value = useSelector(counter)
  const dispatch = useDispatch()

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid style={{marginBottom: '1vh'}} item xs={12}>
          <Typography variant='h3' display='inline'>Value is: </Typography>
          <Typography variant='h2' display='inline'>{value}</Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => dispatch(increment())}>
            increment
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => dispatch(decrement())}>
            decrement
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => dispatch(incrementByAmount(Number(prompt())))}>
            increment by amount
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={() => dispatch(incrementAsync())}>
            incrementAsync
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Counter;