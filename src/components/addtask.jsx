import { useState } from "react";
import axios from "axios";
import "./addtask.css";

function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://mern-back-21g1.onrender.com/tasks", {
                title,
                description,
            });

            console.log("Task Added:", response.data);
            setTitle("");
            setDescription("");

            // Notify parent component to refresh task list
            if (onTaskAdded) {
                onTaskAdded();
                console.log("added")
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <form className="addtask" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
}

export default AddTask;
