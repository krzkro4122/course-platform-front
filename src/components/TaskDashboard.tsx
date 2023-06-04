import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import TitlesContext from "./contexts/TitlesContext";
import { AuthContext } from "./contexts/AuthProvider";
import SideBar from "./SideBar";
import Task from "./Task";

import "../styles/TaskDashboard.css";

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
          <Task taskId={activeTaskId} taskTitle={titles[activeTaskId]}/>
        </TitlesContext.Provider>
      </div>
    );
  }
}

export default TaskDashboard;
