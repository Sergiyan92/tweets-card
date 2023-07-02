import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, updateTask } from './operations';
const initialState = {
  users: {
    items: [],
    page: 1,
    isLoading: false,
    isFollowing: false,
    error: null,
  },
  // filter: '',
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
    updateTask: (state, { payload }) => {
      state.users.items = state.users.items.map(el =>
        el.id === payload.id ? { ...el, followers: payload.followers - 1 } : el
      );
    },
    increaseFollowersCount: (state, action) => {
      const increment = action.payload ? -1 : 1;
      state.users.items.followers = increment;
    },
    // filteredContacts: (state, { payload }) => {
    //   state.filter = payload;
    // },
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
    [updateTask.pending]: state => {
      state.users.isLoading = true;
    },
    [updateTask.fulfilled]: (state, { payload }) => {
      state.users.items = state.users.items.map(el =>
        el.id === payload.id ? { ...el, followers: payload.followers + 1 } : el
      );
      // state.users.isFollowing = true;
    },
    [updateTask.rejected]: (state, { payload }) => {
      state.users.error = payload;
      state.users.isLoading = false;
    },
  },
});

// export const { filteredContacts } = contactsSlice.actions;
export const { increasePage, toggleFollowing, increaseFollowersCount } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
