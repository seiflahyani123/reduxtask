import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask,  } from "../Redux/Action";

const AddTask = () => {
    const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
     const handleAdd=()=>{

        if (desc == '') {
            alert('iktib haja ya matejemch itzid' );
        } else {
            dispatch(addtask({desc, id : Math.random(), isDone : false}))
            setDesc('')
        }

        
    }
  return (
    <div className="add-todo-container">
      <input type="text"  value={desc} placeholder="Add a new task" className="add-todo-input" onChange={(e)=> setDesc(e.target.value)}/>
      <button className="add-todo-btn" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
