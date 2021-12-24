import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'users/fetchALL',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }

    }
)