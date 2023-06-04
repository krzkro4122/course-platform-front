import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import CourseContext from "./contexts/CourseContext";
import { AuthContext } from "./contexts/AuthProvider";

import "../styles/TaskDashboard.css";

function CourseBrowser() {
  const courses = useContext(CourseContext);
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    console.log("Navigating to /login...");
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="courseBrowser">
        <CourseContext.Provider value={courses}>
            I like men
        </CourseContext.Provider>
      </div>
    );
  }
}

export default CourseBrowser;
