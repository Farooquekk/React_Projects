import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["Wake Up 6.am","Do Prayers","Eat BreakFast","Go to Online Classes"]);
    const [newTasks, setNewTasks] = useState("");
    function handleInputChange(e) {
        setNewTasks(e.target.value)
    }
  function addTask() {
    if (newTasks.trim() !== '') {
      setTasks(t => [...t, newTasks]);
      setNewTasks('');
    }
        
    }
    function deleteTask(index) {
      const updatedTask = tasks.filter((_, i) => i !== index)
      setTasks(updatedTask)
    }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTasks(updatedTask);
      }

    }
    function moveTaskDown(index) {
      if (index < tasks.length - 1) {
        const updatedTask = [...tasks];
        [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
        setTasks(updatedTask);
        }
    }
  return (
      <div className="to-do-list">
          <h1>ToDoList App</h1>
          <input type="text" placeholder="Enter To Do ..." value={newTasks} onChange={handleInputChange}></input>
          <button className="add-button" onClick={addTask}>Add</button>
      <ol>{tasks.map((ele, index) => <li key={index}><span className="text">{ele}</span>
      <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
      <button className="move-button" onClick={()=>moveTaskUp(index)}>👆</button>
      <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
      </li>)}</ol>
    </div>
  )
}

export default ToDoList