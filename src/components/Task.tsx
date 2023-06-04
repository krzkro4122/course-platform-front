import "../styles/Task.css";

interface ITaskInfo {
  taskId: number;
  taskTitle: string;
}

function Task({ taskId, taskTitle }: ITaskInfo) {
  return (
    <div className="task">
      <h2>{taskTitle}</h2>
      <h1>{taskId}</h1>
    </div>
  );
}

export default Task;
