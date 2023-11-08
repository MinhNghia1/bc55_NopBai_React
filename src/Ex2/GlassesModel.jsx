import React from "react";

export default function GlassesModel({ glass }) {
  return (
    <div className="text-center mt-5">
      <img src="./glassesImage/model.jpg" alt="model.jpg" height={300} />
      <img src={glass.url} alt="g1.jpg" height={40} />
    </div>
  );
}
