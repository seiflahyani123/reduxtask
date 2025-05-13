
import { useDispatch } from 'react-redux';
import { deletetask, toggletask } from '../Redux/Action';



const CardTask = ({ task }) => {
  const dispatch = useDispatch();
  return (
<div className="card-todo">
  <h2 className={task.isDone ? "chateb" : ""}>{task.desc}</h2>
  <div className="icons">
    <i
      className={`fa-solid fa-check ${task.isDone ? "disabled" : ""}`}
      onClick={() => {
        if (!task.isDone) dispatch(toggletask(task.id));
      }}
    ></i>
    <i
      className="fa-solid fa-trash"
      onClick={() => dispatch(deletetask(task.id))}
    ></i>
  </div>
</div>


  );
};

export default CardTask;
