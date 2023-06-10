import { useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCourse, fetchTasks } from "helpers/fetchers";
import { useGuard } from "components/Authentication/useAuth";
import Sidebar, { SidebarProps } from "./Sidebar";
import Task from "./Task";

import "styles/TaskDashboard.css";

function TaskDashboard() {
  const { id } = useParams();
  const course = fetchCourse(id!);
  const tasks = fetchTasks().filter((task) => {
    return course!.taskIds.includes(task.id);
  });
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const sibebarProps: SidebarProps = {
    activeTaskIndex: activeTaskIndex,
    setActiveTaskIndex: setActiveTaskIndex,
    tasks: tasks,
  };
  return useGuard(
    <div className="taskDashboard">
      <Sidebar {...sibebarProps} />
      <Task task={tasks[activeTaskIndex]} />
    </div>
  );
}

export default TaskDashboard;
