import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";

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
            <Route index element={<TaskDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
