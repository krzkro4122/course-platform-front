import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./AuthProvider";
import SideBar from "./SideBar";
import Task from "./Task";

import "../styles/TaskDashboard.css";
import { fetchTasks } from "../helpers/fetchers";

function TaskDashboard() {
  const tasks = fetchTasks();
  const [activeTaskIndex, setActiveTask] = useState(0);
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    console.log("Navigating to /login...");
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="taskDashboard">
          <SideBar activeTask={activeTaskIndex} setActiveTask={setActiveTask} />
          <Task taskContent={tasks[activeTaskIndex]} />
      </div>
    );
  }
}

export default TaskDashboard;
