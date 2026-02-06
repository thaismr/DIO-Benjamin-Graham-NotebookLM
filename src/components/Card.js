import React from "react";
import "./Card.css";

function Card({ title, icon, children, className = "" }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        {icon && <span className="card-icon">{icon}</span>}
        <h2 className="card-title">{title}</h2>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
