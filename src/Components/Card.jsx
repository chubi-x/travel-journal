import React from "react";
import pin from "../images/pin.png";
export default function Card() {
  return (
    <section className="card">
      <div className="card-image"></div>
      <div className="card-details">
        <div className="card-location">
          <img src={pin} alt="location pin" />
        </div>
        <div className="card-title"></div>
        <div className="card-date"></div>
        <div className="card-description"></div>
      </div>
    </section>
  );
}
