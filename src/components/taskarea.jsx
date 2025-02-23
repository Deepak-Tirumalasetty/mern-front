import "./taskarea.css"

function TaskArea({children})
{
    return (
        <div className="taskarea">
            {children}
        </div>
    )
}

export default TaskArea;