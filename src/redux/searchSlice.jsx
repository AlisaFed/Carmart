import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from '../utils/api';

export const initialState = {
  search: '',
  page: 1,
  name: '',
  cards: [],
  last: 0,
  id: 0,
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    addcurrentLink(state, action) {
      state.currentLink = action.payload.currentLink;
    },
    searchSubmit(state, action) {
      state.cards = action.payload.cards;
      state.last = action.payload.last;
      state.id = action.payload.id;
    },
    searchChange(state, action) {
      state.name = action.payload.name;
      state.search = action.payload.search;
      state.cards = action.payload.cards;
    },
  },
  extraReducers: {
    [fetchCards.fulfilled.type]: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { addcurrentLink, searchSubmit, searchChange, } =
  searchSlice.actions;

export default searchSlice.reducer;