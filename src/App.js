import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasts] = useState([
    {
      id: 1,
      text: "Meeting Appointment",
      day: "Jan. 6 at 10:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "14. 6 at 1:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Oct. 26 at 11:30am",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    const filtered = tasks.filter((del) => del.id !== id);
    setTasts(filtered);
  };

  const toggleReminder = (id) => {
    setTasts((task) =>
      task.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toggleAdd = (task) => {
    setShowAddTask(task ? !showAddTask : true);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    const mainTasks = [...tasks, newTask];
    console.log(mainTasks);
    setTasts(mainTasks);
  };

  const isEmpty = () => {
    return tasks.length <= 0 ? (
      <h1
        style={{
          color: "red",
          textAlign: "center",
          marginTop: "50px",
          marginLeft: "40px",
          fontWeight: 300,
          fontSize: "20px",
          background: "rgba(128, 128, 128, 0.156)",
          padding: "10px",
        }}
      >
        Sorry, there is no task to show, kindly add one.
      </h1>
    ) : (
      <Tasks
        onToggle={toggleReminder}
        tasks={tasks}
        handleDelete={deleteTask}
      />
    );
  };

  console.log(showAddTask);

  return (
    <div className="App">
      <Header show={toggleAdd} toggle={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} task={tasks} />}
      {isEmpty()}
    </div>
  );
}

export default App;
