import React from "react";
export default function AddTaskForm({onClose, onAddTask, isStyled}) {
    const [task, setTask] = React.useState({
        title: '',
        content: '',
        due_date: '',
        status: 'Pending', 
    });
    
    const formStyle = isStyled
    ? { background: "#f0f8ff", color: "#333", border: "2px solid #007bff" }
    : { background: "#fff", color: "#000", border: "1px solid #ccc" };


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({
            ...task,
            id: Date.now(),
            createdAt: new Date().toISOString(),
        });
        onClose();
    }
    return (
        <div className={`add-task-form ${isStyled ? "styled" : "default"}`}>
            <div className="form">
                <h1>Add Task</h1>
                <form onSubmit={handleSubmit}>
                    
                  <div className="form-group">
                      <label>Title</label>
                      <input 
                          type="text" 
                          className="form-control"
                          value={task.title}
                          onChange={(e) => setTask({ ...task, title: e.target.value })}
                          id="title" 
                          placeholder="Enter Title" 
                          required
                      /> 
                  </div>  
                  <div className="form-group">
                      <label>Task Content</label>
                      <textarea
                          name="content"
                          className="form-control"
                          value={task.content}
                          onChange={(e) => setTask({ ...task, content: e.target.value })}
                          placeholder="Enter Task Content"
                          required
                      />
                  </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select
                            name="status"
                            value={task.status}
                            onChange={(e) => setTask({ ...task, status: e.target.value })}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Done">Done</option>
                            <option value="In-Progress">In Progress</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                       <label>Due Date</label>
                       <input 
                           type="date" 
                           className="form-control" 
                           id="due-date" 
                           placeholder="Enter Date" 
                           onChange={(e) => setTask({ ...task, due_date: e.target.value })}
                       />
                    </div>
                    
                    <div className="form-actions">
                        <button className="btn btn-primary" type="button" onClick={onClose}>Cancel</button>
                        <button className="btn btn-primary" type="submit">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}