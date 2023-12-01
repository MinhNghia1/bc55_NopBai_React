import React from "react";

export default function SeatItem({ obj }) {
  return (
    <div className="container row" key={obj.seats.id}>
      {obj.seats.map((seat) => (
        <button className="row col-1 btn btn-secondary me-2">{seat.name}</button>
      ))}
    </div>
  );
}
