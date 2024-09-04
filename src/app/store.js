/*app/store.js
код створює Redux store, який має два редуктори: yourReducer та taskReducerSlice.
 Це дозволяє вам організувати та керувати станом вашого додатка, 
 розділяючи його на різні частини, кожна з яких відповідає за певну функціональність.
*/
import { configureStore } from '@reduxjs/toolkit';
import yourReducer from './yourReducer';
import calendarReducer from './calendarReducer';

const store = configureStore({
  reducer: {
    yourReducer: yourReducer,
    calendar: calendarReducer,
  },
});

export default store;
