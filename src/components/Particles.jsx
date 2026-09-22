import React from "react";

export default function Particles() {
  const particles = Array.from({ length: 34 }, (_, i) => ({
    id: i,
    left: `${4 + ((i * 29) % 92)}%`,
    top: `${12 + ((i * 47) % 70)}%`,
    size: 2 + (i % 3),
    delay: `${(i % 9) * .7}s`,
    duration: `${5 + (i % 5)}s`
  }));

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration
          }}
        />
      ))}
    </div>
  );
}