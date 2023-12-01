import React from "react";
import SeatItem from "./SeatItem";

export default function SeatMovie({ listSeats }) {
  return (
    <div className="container">
      <h1 className="text-center text-warning fw-bold">Đặt Vé Xem Phim</h1>

      <div className="text-light text-center mt-3 fw-bold">
        <div className="bg-warning ps-2 py-2  border rounded border-0">Màn Hình</div>
      </div>

      {listSeats.map((obj) => (
        <div className="row mt-1">
          <h4 className="fw-bold text-warning col-1 mt-1">{obj.row}</h4>
          <div className="col-11">
            <SeatItem obj={obj} />
          </div>
        </div>
      ))}
    </div>
  );
}
