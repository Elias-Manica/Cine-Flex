import "./style.css";
import React from "react";

export default function Bottom({ posterURL, title, day, name, hairline }) {
  return (
    <div className="bottom">
      <div className="poster">
        <img src={posterURL} alt={title}></img>
      </div>
      <div className="layoutBottom">
        <p>{title} </p>
        <p>
          {day} {hairline} {name}
        </p>
      </div>
    </div>
  );
}
