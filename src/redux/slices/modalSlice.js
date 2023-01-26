import { createSlice } from '@reduxjs/toolkit'

// REDUX SLICE FOR THE MODAL
export const modalSlice = createSlice({
  // SLICE NAME
  name: 'modal',
  // INITIAL STATE
  initialState: {
    isOpen: false
  },
  // REDUCERS
  reducers: {
    // MODAL TOGGLER
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen
    },
  },
})

// EXPORTED ACTIONS (REDUCERS)
export const { toggleModal } = modalSlice.actions
// EXPORTED MAIN REDUCER
export const modalReducer = modalSlice.reducer