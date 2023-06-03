import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import TaskDashboard from "./TaskDashboard";
import TokenContext from "./TokenContext";
import Register from "./Register";
import Login from "./Login";

import "../styles/App.css";

function App() {
  const fetchToken = useContext(TokenContext);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const authentication = {
    get: isAuthenticated,
    set: setIsAuthenticated,
  };

  useEffect(() => {
    if (localStorage.getItem("authenticated") === "true") {
      if (!isAuthenticated) {
        // setIsAuthenticated(true);
      }
    } else setIsAuthenticated(false);
  }, []);

  return (
    <div className="App">
      <TokenContext.Provider value={fetchToken}>
        <BrowserRouter>
          <Routes>
            <Route index element={<TaskDashboard />} />
            <Route
              path="/login"
              element={<Login authentication={authentication} />}
            />
            <Route
              path="/register"
              element={<Register authentication={authentication} />}
            />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
