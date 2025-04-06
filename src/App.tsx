import React from "react";
import "./Styles/App.css";
import AddTaskForm from "./Components/AddTaskForm.jsx";
export default function App () {
    
    interface Task {
        id: number;
        title: string;
        content: string;
        due_date: string;
        status: string;
        createdAt: string;
    }

    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [showForm, setShowForm] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    
    const addTask = (task:Task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }

    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    }

    const changeBackgroundColor = () => {
        
        if(isDarkMode) {
            document.body.style.backgroundColor = "#FFFFFF"; 
            document.body.style.color = "#333"; 
        }
        else{
            document.body.style.backgroundColor = "#333"; 
            document.body.style.color = "#FFFFFF"; 
        }   
        setIsDarkMode(!isDarkMode);
    };

    return(
        <div className="list-container">
            <h1 id="list-title">Todo List</h1>
            <button className="add-task-btn" onClick={ () => setShowForm(true)}>
                Add a new task
            </button>

            
            <div className={`tasks-list ${isDarkMode ? "dark" : ""}`}>
                {tasks.map(task => (
                    <div key={task.id} className={`task-item ${task.status} ${isDarkMode ? "dark-item" : ""}`}>
                        <h3>{task.title}</h3>
                        <p>{task.content}</p>
                        <div className="task-meta">
                          <span>{task.due_date || "No deadline"}</span>
                          <span className={task.status}>{task.status}</span>
                        </div>
                        <div className="task-actions">
                            <button className="delete-btn" onClick={ ()=> deleteTask(task.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {showForm &&
                (<div className="modal-overlay">
                 <AddTaskForm onClose={() =>
                 setShowForm(false)} 
                 onAddTask={addTask} 
                 isStyled={isDarkMode}/>
                </div>
                    
                )}
            <div className="theme-container">
                <button className="change-theme" onClick={changeBackgroundColor}>✶</button>
            </div>    
        </div>
    );
}
