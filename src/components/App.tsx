import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./Authentication/AuthProvider";
import CourseBrowser from "./Course/CourseBrowser";
import LeagueBrowser from "./League/LeagueBrowser";
import TaskDashboard from "./Task/TaskDashboard";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<LeagueBrowser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/league/:id/courses" element={<CourseBrowser />} />
            <Route path="/course/:id/tasks" element={<TaskDashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
