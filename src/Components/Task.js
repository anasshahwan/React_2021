import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete }) => {
    return (
        <div className="card mt-1 p-3 bg-success row">
           <div className="card-body p-3 row">

               <div className= "col-sm-3">
               <h5 className="card-title p-3">{task.text}{' '} </h5>
               </div>
               <div className= "col-2">
               <FaTimes onClick={ ()=> onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }}/>
                </div>
               </div> 
        </div>
    )
}

Task.propTypes = {

}

export default Task
