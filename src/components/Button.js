import React from "react";

const Button = ({ text, onClick, color }) => {
  return (
    <div>
      <button
        onClick={(e) => onClick(e)}
        style={{
          backgroundColor: color,
        }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
