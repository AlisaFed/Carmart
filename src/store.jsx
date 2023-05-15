import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './redux/searchSlice';

export default configureStore({
  reducer: { searchData: searchReducer },
  devTools: process.env.NODE_ENV !== 'production',
});
