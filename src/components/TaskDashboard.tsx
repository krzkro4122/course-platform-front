import { useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCourse, fetchTasks } from "../helpers/fetchers";
import { useGuard } from "./useAuth";
import Sidebar from "./Sidebar";
import Task from "./Task";

import "../styles/TaskDashboard.css";

function TaskDashboard() {
  const { id } = useParams();
  const course = fetchCourse(id!);
  const tasks = fetchTasks().filter((task) => {
    return course!.taskIds.includes(task.id);
  });
  const [activeTaskIndex, setActiveTask] = useState(0);

  return useGuard(
    <div className="taskDashboard">
      <Sidebar activeTask={activeTaskIndex} setActiveTask={setActiveTask} />
      <Task task={tasks[activeTaskIndex]} />
    </div>
  );
}

export default TaskDashboard;
