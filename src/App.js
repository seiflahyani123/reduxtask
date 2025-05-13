
import './App.css';
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTask';

function App() {
  return (
        <div className="App">
      <div className="header">
        <img
  src="https://cdn-icons-png.flaticon.com/512/3501/3501071.png"
  alt="Checklist Icon"
  className="logo"
/>

        <h1>To Do List</h1>
      </div>
      <div className="line"></div>
      <h2>My Tasks</h2>
      <br />
<ListTasks/>
<AddTask/>
    </div>
  );
}

export default App;
