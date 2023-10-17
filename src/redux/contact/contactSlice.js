import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from '../operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
    sortedAlphabetic: true,
    recentlyAdded: true,
  },
  reducers: {
    sortByName(state) {
      state.items = state.items.sort((firstContact, secondContact) =>
        state.sortedAlphabetic
          ? firstContact.name.localeCompare(secondContact.name)
          : secondContact.name.localeCompare(firstContact.name)
      );
      state.sortedAlphabetic = !state.sortedAlphabetic;
    },
    sortByAdded(state) {
      state.items = state.items.sort((firstContact, secondContact) =>
        state.recentlyAdded
          ? firstContact.id.localeCompare(secondContact.id)
          : secondContact.id.localeCompare(firstContact.id)
      );
      state.recentlyAdded = !state.recentlyAdded;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleReject)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleReject)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateContact.pending, (state) => {
        state.isLoading = true;
        // state.shouldOpenModal = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error=null
        const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items.splice(index, 1, action.payload);
      });
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  sortByName,
  sortByAdded,
} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
