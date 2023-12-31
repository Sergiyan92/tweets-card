import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a00ee2ed3c41bdd7a6f3de.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/users?completed=true&page=${page}&limit=3`
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
