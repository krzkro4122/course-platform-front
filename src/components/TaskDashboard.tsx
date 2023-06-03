import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import TitlesContext from "./TitlesContext";
import "../styles/TaskDashboard.css";
import SideBar from "./SideBar";
import Task from "./Task";

interface TaskDashboardProps {
  isAuthenticated: boolean
}

function TaskDashboard({ isAuthenticated } : TaskDashboardProps) {
  const titles = useContext(TitlesContext);
  const [activeTaskId, setActiveTask] = useState(0);

  if (!isAuthenticated) {
    console.log("Navigating to /login...");
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="taskDashboard">
        <TitlesContext.Provider value={titles}>
          <SideBar activeTask={activeTaskId} setActiveTask={setActiveTask} />
          <Task taskId={activeTaskId} />
        </TitlesContext.Provider>
      </div>
    );
  }
}

export default TaskDashboard;
