import Task from "./Task";
import "./Tasks.css";
const Tasks = ({ tasks, handleDelete, onToggle }) => {
  return (
    <div className="Tasks">
      {/* {console.log(handleDelete)} */}
      {tasks.map((task) => (
        <Task
          onToggle={onToggle}
          key={task.id}
          task={task}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Tasks;
