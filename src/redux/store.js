import { configureStore } from '@reduxjs/toolkit';
import { favlistReducer } from './slices/favlistSlice';
import { modalReducer } from './slices/modalSlice';

// CONFIGURATION OF THE REDUX STORE
// WE CAN ADD AS MANY REDUCERS AS NEED IT
export const store = configureStore({
  reducer: {
    favlist: favlistReducer,
    modal: modalReducer
  },
});
