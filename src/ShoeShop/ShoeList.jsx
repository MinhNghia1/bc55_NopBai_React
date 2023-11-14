import React from "react";
import ShoeItem from "./ShoeItem";

export default function ShoeList({ products, onSelect }) {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-4 mb-5">
          <ShoeItem product={product} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
