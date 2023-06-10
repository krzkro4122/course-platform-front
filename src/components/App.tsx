import { BrowserRouter, Routes, Route } from "react-router-dom";

import CourseBrowser from "./CourseBrowser";
import LeagueBrowser from "./LeagueBrowser";
import TaskDashboard from "./TaskDashboard";
import AuthProvider from "./AuthProvider";
import Register from "./Register";
import Login from "./Login";

import "../styles/App.css";

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
