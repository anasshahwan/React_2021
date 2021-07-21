import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './Components/AddTask';
function App() {
  

const [tasks, setTasks] = useState([])

useEffect(()=>{
    const fetchTasks = async()=> {
      const result = await fetch('http://localhost:5100/tasks')
      const data = await result.json()
      console.log(data)
    }

    fetchTasks()
}, [])
const addTask = (task) => {
  
  const id =  tasks.length + 1
  const newTask = { id , ...task}
  setTasks([...tasks, newTask])

}
const deleteTask = (id) => {
  console.log("Deleted ", id)
  setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <div className="App">
    <Header title="React 2021 Todo App"/>
    <AddTask onAddTask={addTask}/>
   {tasks.length > 0 ?    <Tasks tasks = {tasks} onDelete= {deleteTask}/> : " No More Notes."} 
    </div>
    
  );
}

export default App;
