import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState, useEffect } from 'react'
import AddTask from './Components/AddTask';
function App() {
  

const [tasks, setTasks] = useState([])

useEffect(() => {
      
   const getTasks = async () => {
     const tasks = await fetchTasks()
     setTasks(tasks)
   }

    getTasks()
}, [])

const fetchTasks = async()=> {
  const result = await fetch('http://localhost:5100/tasks')
  const data = await result.json()
  console.log(data)
  return data
}

const addTask = async (task) => {
  const res = await fetch("http://localhost:5100/tasks/", 
  { method : "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body:JSON.stringify(task)

})

 // const id =  tasks.length + 1
  const newTask = await res.json()
  setTasks([...tasks, newTask])

}
const deleteTask = async (id) => {

  await fetch(`http://localhost:5100/tasks/${id}`, { method : "Delete"})

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
