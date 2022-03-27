import React from "react";
import "./DelBtn.css";

const DelBtn = ({ task, handleDelete }) => {
  return (
    <div>
      <button onClick={() => handleDelete(task.id)} className="DelBtn">
        x
      </button>
    </div>
  );
};

export default DelBtn;
