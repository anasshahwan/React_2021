import React from 'react'
 const Tasks = () => {

    const [tasks, setTasks] = React.useState([
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
        <>
        {tasks.map((task)=>(<h1 key={task.id}>{task.text}</h1>))}
        </>
    )
}

export default Tasks;
