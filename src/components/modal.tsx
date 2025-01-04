import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "fixed",
        overflow: "auto",
        inset: "0px",
        zIndex: 9999,
      }}
      className="bg-black bg-opacity-60"
    >
      <span
        style={{
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0px",
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: "0px",
          left: "0px",
        }}
      ></span>
      {children}
      <span
        style={{
          border: "0px",
          clip: "rect(0px, 0px, 0px, 0px)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0px",
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: "0px",
          left: "0px",
        }}
      ></span>
    </div>
  );
};

export default Modal;
