import React from "react";

export default function Step({ index, label, selected, updateStep }) {
  return (
    <div className={`stepBlock ${selected ? "selected" : ""}`}>
      <div className="circleWrapper" onClick={() => updateStep(index)}>
        <div className="circle"></div>
        <span className="stepNavLabel">{label}</span>
      </div>
    </div>
  );
}
