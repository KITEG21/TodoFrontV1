import React from "react";
import "./Styles/App.css";
import AddTaskForm from "./Components/AddTaskForm.jsx";
export default function App () {
    const [tasks, setTasks] = React.useState([]);
    const [showForm, setShowForm] = React.useState(false);
    
    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }
    
    return(
        <div className="list-container">
            <h1 id="list-title">Todo List</h1>
            <button className="add-task-btn" onClick={ () => setShowForm(true)}>
                Add a new task
            </button>
            
            <div className="tasks-list">
                {tasks.map(task => (
                    <div key={task.id} className={`task-item ${task.status}`}>
                        <h3>{task.title}</h3>
                        <p>{task.content}</p>
                        <div className="task-meta">
                          <span>{task.due_date || "No deadline"}</span>
                          <span className={task.status}>{task.status}</span>
                        </div>
                    </div>
                ))}
            </div>
            {showForm &&
                (<div className="modal-overlay">
                 <AddTaskForm onClose={() =>
                 setShowForm(false)} 
                 onAddTask={addTask} />
                </div>
                    
                )}
        </div>
    );
}
