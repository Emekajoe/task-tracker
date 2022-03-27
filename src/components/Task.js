import React from "react";
import DelBtn from "./DelBtn";
import "./Task.css";

const Task = ({ task, handleDelete, onToggle }) => {
  return (
    <div
      className={`Task ${task.reminder ? "reminder" : null}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <ul className="Task-list">
        <li className="Task-item">
          {task.text} on {task.day}
        </li>
      </ul>
      <DelBtn onToggle={onToggle} task={task} handleDelete={handleDelete} />
    </div>
  );
};

export default Task;
