import React from "react";
import GlassesItem from "./GlassesItem";

export default function ({ glasses, onSelect }) {
  return (
    <div className="container">
      <div className="row bg-light container">
        {glasses.map((glass) => (
          <div key={glasses.id} className="col-md-2">
            <GlassesItem onSelect={onSelect} glass={glass} />
          </div>
        ))}
      </div>
    </div>
  );
}
