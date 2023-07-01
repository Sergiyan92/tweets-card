import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './operations';
const initialState = {
  users: {
    items: [],
    page: 1,
    isLoading: false,
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
      state.error = payload;
      state.isLoading = false;
    },
  },
});

// export const { filteredContacts } = contactsSlice.actions;
export const { increasePage, loadTweets } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
