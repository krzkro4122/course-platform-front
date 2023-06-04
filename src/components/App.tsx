import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./contexts/AuthProvider";
import Register from "./Register";
import Login from "./Login";

import "../styles/App.css";
import CourseBrowser from "./CourseBrowser";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<CourseBrowser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
