import React from "react";
import "../asset/style/style.css";
export default function GlassesModel({ glass }) {
  return (
    <div>
      <div className="text-center mt-5 ">
        <div className="imagesclasses">
          {/* <div className="imageModel"> */}
          <img src="./glassesImage/model.jpg" alt="model.jpg" height={300} />
          {/* </div> */}
          {/* <div className="imageItem"> */}
          <img className="imageItem" src={glass.url} alt="g1.jpg" height={40} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
