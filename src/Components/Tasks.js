import React from 'react'

const tasks = [
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
]
 const Tasks = () => {
    return (
        <>
        {tasks.map((task)=>(<h1>{task.text}</h1>))}
        </>
    )
}

export default Tasks;
