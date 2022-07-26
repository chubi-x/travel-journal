import React from "react";
import pin from "../images/pin.png";
export default function Card(props) {
  const item = props.item;

  return (
    <>
      <section className="card">
        <div className="card-image">
          <img src={item.img} alt="card" />
        </div>
        <div className="card-details">
          <div className="card-location">
            <img src={pin} alt="location pin" />
            <span>{item.location}</span>
            <a href={item.mapLink}>View on Google Maps</a>
          </div>
          <div className="card-title">
            <p>{item.title}</p>
          </div>
          <div className="card-date">
            <p>{item.date}</p>
          </div>
          <div className="card-description">{item.description}</div>
        </div>
      </section>
      <hr style={{ width: "600px", border: "1px solid #F5F5F5" }} />
    </>
  );
}
