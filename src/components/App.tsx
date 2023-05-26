import { useState } from "react";

import TaskDashboard from "./TaskDashboard";
import Login from "./Login";
import Register from "./Register";
import { FormType } from "../helpers/validation";

import "../styles/App.css";

type Username = String | undefined;
type Password = String | undefined;
// type Token = String | undefined;

const SERVER_URL = "I LIKE MEN";

function App() {
  const [token, setToken] = useState<String | undefined>();
  const [formType, setFormType] = useState<FormType>(FormType.Login);

  function getToken(username: Username, password: Password) {
    // const response = await fetch(`${SERVER_URL}${"/login"}`, {
    //   method: "POST",
    //   mode: "cors",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   redirect: "follow",
    //   referrerPolicy: "no-referrer",
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // });
    // const jsonData: TokenInfo = await response.json();
    // const token = jsonData.token;
    // return token;
    return "lol";
  }

  return (
    <div className="App">
      {token ? (
        <TaskDashboard />
      ) : formType ? (
        <Login
          setFormType={setFormType}
          getToken={getToken}
          setToken={setToken}
        />
      ) : (
        <Register
          setFormType={setFormType}
          getToken={getToken}
          setToken={setToken}
        />
      )}
    </div>
  );
}

export default App;
