import { createSlice } from '@reduxjs/toolkit'

// REDUX SLICE FOR THE FAVLIST
export const favlistSlice = createSlice({
  // SLICE NAME
  name: 'favlist',
  // INITIAL STATE
  initialState: {
    list: []
  },
  // REDUCERS
  reducers: {
    // METHOD TO ADD IT TO THE FAVLIST
    addToFavlist: (state, action) => {
      // IF THERE ARE LESS THAN 5 ITEMS, ADD IT
      // OTHERWISE DON'T DO NOTHING
      state.list.length < 5 && state.list.push(action.payload)
    },
    // METHOD TO REMOVE IT FROM THE FAVLIST
    removeFromFavlist: (state, action) => {
      // SEARCH THE ID OF THE ITEM TO REMOVE
      // IF EXISTS REMOVE IT FROM THE ARRAY
      state.list = state.list.filter(item => item.id !== action.payload)
    }
  },
})

// EXPORTED ACTIONS (REDUCERS)
export const { addToFavlist, removeFromFavlist } = favlistSlice.actions
// EXPORTED MAIN REDUCER
export const favlistReducer = favlistSlice.reducer