// components/Modal.jsx
import React from "react";

function Modal({ open, title, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded w-96">
        <div className="flex justify-between mb-2">
          <h2 className="font-bold">{title}</h2>
          <button onClick={onClose} className="text-3xl">&times;</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
