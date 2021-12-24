import {increment} from "../slices/counterSlice";

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(increment())
  }, 1000)
}