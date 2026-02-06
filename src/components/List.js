import React from "react";
import "./List.css";

function List({ title, items, numbered = false }) {
  return (
    <div className="list-container">
      {title && <h3 className="list-title">{title}</h3>}
      <ul className="list-items">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {numbered ? `${index + 1}. ` : "• "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
