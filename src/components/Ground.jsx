import React from "react";

export default function Ground() {
  return (
    <div className="ground" aria-hidden="true">
      <div className="ground-glow" />
      <div className="soil">
        {Array.from({ length: 20 }, (_, i) => (
          <i key={i} style={{ "--x": `${(i * 37) % 100}%`, "--r": `${-20 + (i % 7) * 7}deg` }} />
        ))}
      </div>
      <div className="grass">
        {Array.from({ length: 32 }, (_, i) => (
          <span key={i} style={{ "--x": `${(i * 31) % 100}%`, "--h": `${8 + (i % 5) * 3}px` }} />
        ))}
      </div>
    </div>
  );
}