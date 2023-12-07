import { configureStore } from "@reduxjs/toolkit";
import busticketReducer from "./Slice/SliceTicketMovie";

const store = configureStore({
  reducer: {
    ticket: busticketReducer,
  },
});
export default store;
