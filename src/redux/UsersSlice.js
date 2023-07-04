import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './operations';
const initialState = {
  users: {
    items: [],
    page: 1,
    error: null,
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increasePage: state => {
      state.users.page += 1;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.users.items.push(...payload);
      state.error = null;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.users.error = payload;
    },
  },
});

export const { increasePage } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
