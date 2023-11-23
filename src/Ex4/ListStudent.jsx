import React from "react";

export default function ListStudent({ infoUsers, onDelete, onRepair }) {
  const u = [...infoUsers].reverse();

  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>Mã Sinh Viên</th>
          <th>Họ Tên</th>
          <th>Số Điện Thoại</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {u.map((infoUser) => (
          <tr key={infoUser.id}>
            <td>{infoUser.masv}</td>
            <td>{infoUser.name}</td>
            <td>{infoUser.phone}</td>
            <td>{infoUser.email}</td>
            <td>
              <button onClick={() => onRepair(infoUser.id)} className="btn btn-success">
                Repair
              </button>
              <button onClick={() => onDelete(infoUser.id)} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
