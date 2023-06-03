import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import TitlesContext from "./TitlesContext";
import { AuthContext } from "./AuthProvider";
import "../styles/TaskDashboard.css";
import SideBar from "./SideBar";
import Task from "./Task";

function TaskDashboard() {
  const titles = useContext(TitlesContext);
  const [activeTaskId, setActiveTask] = useState(0);
  const { isAuthenticated } = useContext(AuthContext);

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
