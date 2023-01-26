import { configureStore } from '@reduxjs/toolkit';
import { favlistReducer } from './slices/favlistSlice';

// CONFIGURATION OF THE REDUX STORE
// WE CAN ADD AS MANY REDUCERS AS NEED IT
export const store = configureStore({
  reducer: {
    favlist: favlistReducer
  },
});
