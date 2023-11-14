import React from "react";

export default function ShoeDetail({ product }) {
  if (!product) {
    return;
  }
  return (
    <div className="row">
      <div className="col-4">
        <img src={product.image} alt={product.alias} height={400} />
      </div>
      <div className="col-8">
        <h3>Thong Tin San Pham</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>ID: </td>
              <td>{product.id}</td>
            </tr>
            <tr>
              <td>Tên Sản Phẩm: </td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>Giá:</td>
              <td>{product.price}$</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>ShortDescription:</td>
              <td>{product.shortDescription}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
