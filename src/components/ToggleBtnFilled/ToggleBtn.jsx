import React, { useState } from "react";
import "./ToggleBtn.css";

export default function ToggleBtn({ items, width, filled }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className={filled ? `toggleBtnFilled` : `toggleBtnNotFilled`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {items[0]}
        <div className={`arrow ${isOpen ? "up" : "down"}`}></div>
      </button>
      {isOpen && (
        <ul className="toggleList">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
