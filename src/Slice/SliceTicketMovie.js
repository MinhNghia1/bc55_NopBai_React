import { createSlice } from "@reduxjs/toolkit";

const busTicketSlice = createSlice({
  name: "busTicket",
  initialState: {
    selectedSeat: [],
    totalPrice: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const { isSlected, ...seat } = action.payload;

      if (isSlected) {
        const selectedSeat = [...state.selectedSeat, seat];
        const totalPrice = state.totalPrice + seat.price;
        return { ...state, selectedSeat, totalPrice };
      }
      const selectedSeat = state.selectedSeat.filter((item) => item.name !== seat.name);
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeat, totalPrice };
    },
    removeSeat: (state, action) => {
      const seat = action.payload;
      const selectedSeat = state.selectedSeat.filter((item) => item.name !== seat.name);
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeat, totalPrice };
    },
  },
});

export const { selectSeat, removeSeat } = busTicketSlice.actions;

export default busTicketSlice.reducer;
