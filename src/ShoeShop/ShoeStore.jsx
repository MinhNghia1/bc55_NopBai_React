import { useState } from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";
import ModelDetail from "./ModelDetail";

export default function ShoeStore() {
  // lay thong tin onclick
  const [selectShoe, setSelectShoe] = useState(null);
  // an hien thong tin product
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectProduct = (product) => {
    setSelectShoe(product);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Shoe Shop</h1>
      <div className="text-end mb-2">
        <button onClick={() => setIsOpen(true)} className="btn btn-danger">
          Show Detail
        </button>
      </div>
      <ShoeList products={data} onSelect={handleSelectProduct} />
      <ModelDetail
        product={selectShoe}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </div>
  );
}
