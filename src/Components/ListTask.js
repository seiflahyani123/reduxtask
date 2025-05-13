import { useSelector } from 'react-redux';

import { useState } from 'react';
import CardTask from './CardTask';

const ListTasks = () => {
  const task = useSelector((state) => state.task);
 const[filter, setFilter] = useState('all');  
  return (
    <div  className={`card-todo ${task.isDone ? 'done' : ''}`} >
     <button
  onClick={() => setFilter('all')}
  className={filter === 'all' ? 'filter-button active' : 'filter-button'}
>
  All
</button>

<button
  onClick={() => setFilter('done')}
  className={filter === 'done' ? 'filter-button active' : 'filter-button'}
>
  Done
</button>

<button
  onClick={() => setFilter('not done')}
  className={filter === 'not done' ? 'filter-button active' : 'filter-button'}
>
  Not Done
</button>

      {
                filter == 'all' ? 

                task.map((task,i,t)=> <CardTask task={task}/>)

                :

                filter == 'done' ?

                task.filter((el,i,t)=> el.isDone == true).map((task,i,t)=> <CardTask task={task}/>)

                :
                
                task.filter((el,i,t)=> el.isDone == false).map((task,i,t)=> <CardTask task={task}/>)


            }
    </div>
  );
};

export default ListTasks;

