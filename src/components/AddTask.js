import React from "react";
import { useState } from "react";
import "./AddTask.css";

const AddTask = ({ onAdd, task }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length <= 0) {
      alert(`Please add text`);
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
          type="text"
          id=""
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          value={day}
          name="day"
          onChange={(e) => setDay(e.target.value)}
          type="text"
          id=""
          placeholder="Add Day & Time"
        />
      </div>
      <div className="form-control">
        <label className="check-label" htmlFor="">
          Set Reminder
        </label>
        <input
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          className="check"
          type="checkbox"
          checked={reminder}
        />
      </div>
      <input className="submit" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
