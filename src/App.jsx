import { useState  , useEffect} from 'react'
import './App.css'
import TaskCard from './components/taskcard'
import AddTask from './components/addtask'
import TaskArea from './components/taskarea'

function truncate(s){
  if(s.length < 40) return s;
  return s.substring(0, 37)+"..."
}

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("https://mern-back-21g1.onrender.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  };

  useEffect(() => {
    // Placeholder tasks (replace this with API call later)
    const placeholderTasks = [
      { id: 1, title: "Task 1", description: "Complete the React project" },
      { id: 2, title: "Task 2", description: "Read about useEffect and useState hooks" },
      { id: 3, title: "Task 3", description: "Prepare for the upcoming meeting" },
    ];



      fetchTasks()


  }, []);


  return (
    <>
    <AddTask  onTaskAdded={fetchTasks} ></AddTask>

    {/* <TaskArea>

        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} desc={truncate(task.description)} />
        ))}

    </TaskArea> */}

      <TaskArea>
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "bold" }}>Tasks Empty</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task._id} id={task._id} title={task.title} desc={truncate(task.description)} onTaskDeleted={fetchTasks} />
          ))
        )}
      </TaskArea>

    </>
  )
}

export default App
