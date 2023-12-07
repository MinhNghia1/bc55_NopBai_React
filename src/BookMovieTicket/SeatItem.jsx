import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSeat } from "../Slice/SliceTicketMovie";
import cn from "classnames";
export default function SeatItem({ seats }) {
  const dispatch = useDispatch();
  const handleSelected = (seat, isSlected) => {
    dispatch(selectSeat({ ...seat, isSlected }));
    // dispatch({
    //   type: "busTicket/selectSeat",
    //   payload: { ...seat, isSlected },
    // });
  };
  const stateSelected = useSelector((state) => {
    return state.ticket.selectedSeat;
  });
  return (
    <>
      {seats.map((seat) => {
        const isSelected = !!stateSelected.find((item) => item.name === seat.name);
        return (
          <button
            onClick={() => handleSelected(seat, !isSelected)}
            className={cn("btn col-1", {
              "btn-danger": seat.booked,
              "btn-success": isSelected,
              "btn-secondary": !isSelected && !seat.booked,
            })}
            disabled={seat.booked}
          >
            {seat.name}
          </button>
        );
      })}
    </>
  );
}
