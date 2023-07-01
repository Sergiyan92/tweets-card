import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64a00ee2ed3c41bdd7a6f3de.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/users');
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'users/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/users', contact);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'users/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`/users/${id}`);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );
