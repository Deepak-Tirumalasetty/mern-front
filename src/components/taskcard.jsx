// import "./addtask.css"

// function TaskCard({title , desc})
// {
//     return (
//         <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">{title}</h5>
//           <p class="card-text">{desc}</p>
//           <a href="#" class="btn btn-danger">Delete</a>
//         </div>
//       </div>
//     )
    
// }

// export  default TaskCard;

import axios from "axios";
import "./addtask.css";

function TaskCard({ title, desc, id, onTaskDeleted }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://mern-back-21g1.onrender.com/tasks/${id}`);
      console.log("Task deleted successfully");



      
      // Notify parent component to refresh task list
      if (onTaskDeleted) {
        onTaskDeleted();
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
