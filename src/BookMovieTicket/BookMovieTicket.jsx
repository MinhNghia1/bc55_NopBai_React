import React from "react";
import data from "./Ticket.json";
import { useSelector } from "react-redux";
import SeatMovie from "./SeatMovie";
import ListSeat from "./ListSeat";
import css from "./";
export default function BookMovieTicket() {
  return (
    <div
      className="row bg-dark"
      style={{
        backgroundImage: `url(http://getwallpapers.com/wallpaper/full/c/a/9/243880.jpg
    )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="col-7">
        <SeatMovie listSeats={data} />
      </div>
      <div className="col-5">
        <ListSeat />
      </div>
    </div>
  );
}
