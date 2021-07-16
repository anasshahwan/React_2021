import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react'
import AddTask from './Components/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Test 1 ",
        isCompleted : true,
    },
    {
        id: 2,
        text: "Test 2 ",
        isCompleted : true,
    },
    {
        id: 3,
        text: "Test 3 ",
        isCompleted : true,
    }
])

const addTask = (task) => {
  console.log(task, tasks.length + 1)
  const id =  tasks.length + 1
  const newTask = { id , ...task}
console.log(newTask)
console.log(tasks)
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
