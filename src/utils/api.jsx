import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCards = createAsyncThunk('searchData/searchItems', async function (url) {
  try {
    const result = (await fetch.get(url)).data.results;
    return result;
  } catch (error) {
    console.log(error);
  }
});
