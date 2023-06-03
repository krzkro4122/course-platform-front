import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskDashboard from "./TaskDashboard";
import TokenContext from "./TokenContext";
import Register from "./Register";
import Login from "./Login";

import "../styles/App.css";
import { useContext } from "react";

function App() {
  const fetchToken = useContext(TokenContext);
  return (
    <div className="App">
      <TokenContext.Provider value={fetchToken}>
        <BrowserRouter>
          <Routes>
              <Route index element={<TaskDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
