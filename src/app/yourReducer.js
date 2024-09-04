import { createSlice } from '@reduxjs/toolkit';

export const yourReducer = createSlice({
    name: 'yourReducer',
    initialState: {
        currentDate: new Date(),
      },
      reducers: {
        setCurrentDate: (state, action) => {
          state.currentDate = action.payload;
        },
      },
});

export const { setCurrentDate } = yourReducer.actions;

export const selectCurrentDate = (state) => state.yourReducer.currentDate;

export default yourReducer.reducer;