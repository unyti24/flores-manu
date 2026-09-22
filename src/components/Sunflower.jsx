import React from "react";

function Petals() {
  return (
    <div className="petals">
      {Array.from({ length: 20 }, (_, i) => (
        <span key={i} style={{ "--i": i }} />
      ))}
    </div>
  );
}

export default function Sunflower({ flower, index, revealed, selected, onClick }) {
  return (
    <div
      className={`flower-unit ${revealed ? "revealed" : ""} ${selected ? "selected" : ""}`}
      style={{
        "--x": `${flower.x}px`,
        "--height": `${flower.height}px`,
        "--rotation": `${flower.rotation}deg`,
        "--scale": flower.scale,
        "--delay": `${flower.delay}s`,
        "--index": index
      }}
    >
      <div className="stem-wrap">
        <div className="stem">
          <span className="leaf leaf-left" />
          <span className="leaf leaf-right" />
        </div>
        <button
          className="sunflower"
          aria-label={`Abrir mensaje ${index + 1}`}
          onClick={onClick}
        >
          <Petals />
          <span className="flower-center">
            <span className="center-dot" />
          </span>
          <span className="flower-shine" />
        </button>
      </div>
    </div>
  );
}