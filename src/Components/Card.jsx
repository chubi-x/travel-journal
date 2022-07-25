import React from "react";
import pin from "../images/pin.png";
export default function Card(props) {
  const item = props.item;

  return (
    <section className="card">
      <div className="card-image">
        <img src={item.img} alt="card" />
      </div>
      <div className="card-details">
        <div className="card-location">
          <img src={pin} alt="location pin" />
          <p>{item.location}</p>
        </div>
        <div className="card-title">{item.title}</div>
        <div className="card-date">{item.date}</div>
        <div className="card-description">{item.description}</div>
      </div>
    </section>
  );
}
