import React from "react";

export default function GlassesItem({ glass, onSelect }) {
  return (
    <div key={glass.id} className="">
      <button className="btn" onClick={() => onSelect(glass)}>
        <img src={glass.url} alt={glass.name} height={50} width={100} />
      </button>
    </div>
  );
}
