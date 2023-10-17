import { createSelector } from "reselect";

export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;
export const selectIsLoader = state => state.contacts.isLoader;
export const selectSortedAlphabetic = state => state.contacts.sortedAlphabetic;
export const selectRecentlyAdded = state => state.contacts.recentlyAdded;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
      (contacts, filterValue) => {
      const filtredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      return filtredContacts;
    }
  );