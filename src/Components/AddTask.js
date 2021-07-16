import { useState } from 'react'

const AddTask= ({ onAddTask }) => {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert("please fill out the form")
            return
        }
        onAddTask({text, "isCompleted": false })

    }
    return (
        <form className="row justify-content-center" onSubmit={(e)=> onSubmit(e)} >
        <div className="col-sm-3">
           <input type="text" value={text} onChange={(e)=> setText(e.target.value)}  placeholder= "Write Your Note.." className="form-control-plaintext" id="staticEmail2"   />
        </div>
       
        <div className="col-sm-1">
          <input type="submit" className="btn btn-primary mb-3" value="Save" />
         </div>
      
      </form>
    )
}

export default AddTask
