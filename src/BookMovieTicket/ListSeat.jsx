import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSeat } from "../Slice/SliceTicketMovie";
export default function ListSeat() {
  const { selectedSeat, totalPrice } = useSelector((state) => {
    return state.ticket;
  });
  const dispatch = useDispatch();
  const handleRemove = (seat) => {
    dispatch(removeSeat(seat));
  };
  return (
    <>
      <h2 className="text-center text-warning">Danh Sách Ghế Đã Chọn</h2>
      <table className="table">
        <thead>
          <tr>
            <th>NameSeat </th>
            <th>Price </th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {selectedSeat.map((seat) => (
            <tr>
              <td>{seat.name}</td>
              <td>{seat.price} VND</td>
              <td>
                <button onClick={() => handleRemove(seat)} className="btn btn-danger ">
                  x
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total Price: </td>
            <td>{totalPrice} VND</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
