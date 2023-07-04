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
    toggleFollowing: state => {
      state.users.isFollowing = !state.users.isFollowing;
    },
    increaseFollowersCount: (state, action) => {
      const increment = action.payload ? -1 : 1;
      state.users.items.followers = increment;
    },
  },
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.users.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.users.items.push(...payload);
      state.users.isLoading = false;
      state.error = null;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.users.error = payload;
      state.users.isLoading = false;
    },
  },
});

export const { increasePage, toggleFollowing, increaseFollowersCount } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
