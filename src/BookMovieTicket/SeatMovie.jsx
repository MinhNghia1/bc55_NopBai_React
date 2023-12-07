import React from "react";
import SeatItem from "./SeatItem";

export default function SeatMovie({ seatsData }) {
  return (
    <>
      <h1 className="text-center text-warning">Đặt Vé Xem Phim </h1>
      <div style={{ borderRadius: 10, height: 30, width: 700, backgroundColor: "gray", marginLeft: 100 }} className="text-center fw-bold  text-white">
        Màn Hình
      </div>
      {seatsData.map((listSeats) => {
        const { seats } = listSeats;
        return (
          <div className="row mt-4">
            <h3 className="col-1 mt-1 text-warning">{listSeats.row}</h3>
            <div className="col-11 row">
              <SeatItem seats={seats} />
            </div>
          </div>
        );
      })}
    </>
  );
}
