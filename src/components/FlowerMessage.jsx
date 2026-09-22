import React from "react";

export default function FlowerMessage({ flower, onClose }) {
  if (!flower) return null;

  return (
    <div className="message-backdrop" onClick={onClose}>
      <div className="message-card" onClick={(e) => e.stopPropagation()}>
        <div className="message-flower">🌻</div>
        <p className="message-kicker">PARA TI</p>
        <p className="message-text">{flower.message}</p>
        <button className="close-message" onClick={onClose}>Cerrar ✕</button>
      </div>
    </div>
  );
}