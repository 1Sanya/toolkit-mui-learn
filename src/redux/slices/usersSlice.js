import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../thunk/fetchUsers";

const initialState = {
  users: [],
  isLoading: false,
  error: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    [fetchUsers.pending.type]: state => {
      state.isLoading = true
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {} = usersSlice.actions

export default usersSlice.reducer