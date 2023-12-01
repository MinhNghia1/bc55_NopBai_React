import { configureStore } from "@reduxjs/toolkit";

const initalStateTicket = [];
const ticketReducer = (state = 0, action) => {
  return state;
};

const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export default store;
