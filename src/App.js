import './App.css';
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react'
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


  return (
    <div className="App">
    <Header title="React 2021 Todo App"/>
    <form className="row justify-content-center" >
  <div className="col-sm-3">
     <input type="text"  placeholder= "Write Your Note.." className="form-control-plaintext" id="staticEmail2"   />
  </div>
 
  <div className="col-sm-1">
    <button type="submit" className="btn btn-primary mb-3">Save</button>
  </div>

</form>
<Tasks tasks = {tasks}/>
    </div>
    
  );
}

export default App;
