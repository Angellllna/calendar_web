import { createSlice } from '@reduxjs/toolkit';

export const yourReducer = createSlice({
    name: 'yourReducer',
    initialState: {
        currentDate: new Date(), // Початкова поточна дата (може бути будь-якою початковою датою)
      },
      reducers: {
        setCurrentDate: (state, action) => {
          // Дія для встановлення нової поточної дати
          state.currentDate = action.payload;
        },
      },
});

export const { setCurrentDate } = yourReducer.actions;

export const selectCurrentDate = (state) => state.yourReducer.currentDate;

export default yourReducer.reducer;