import React from "react";

export default function ShoeItem({ product, onSelect }) {
  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.alias} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}$</p>
        <button className="btn btn-dark" onClick={() => onSelect(product)}>
          Detail
        </button>
      </div>
    </div>
  );
}
