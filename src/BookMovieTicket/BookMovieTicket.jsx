import { useState } from "react";
import data from "./Ticket.json";
import SeatMovie from "./SeatMovie";
import ListSeat from "./ListSeat";
export default function BookMovieTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <SeatMovie seatsData={data} />
        </div>
        <div className="col-4">
          <ListSeat />
        </div>
      </div>
    </div>
  );
}
