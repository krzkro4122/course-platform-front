import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./AuthProvider";
import { fetchCourses } from "../helpers/fetchers";

function CourseBrowser() {
  const courses = fetchCourses();
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    console.log("Navigating to /login...");
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="courseBrowser">
        I like men
      </div>
    );
  }
}

export default CourseBrowser;
