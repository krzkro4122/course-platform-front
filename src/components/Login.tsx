import React, { FormEvent, useState } from "react";

import "../styles/Login.css";

interface ITokenHandlers {
  getToken: (
    username: String | undefined,
    password: String | undefined
  ) => String | undefined;
  setToken: React.Dispatch<React.SetStateAction<String | undefined>>;
}

function Login({ setToken, getToken }: ITokenHandlers) {
  const [username, setUsername] = useState<String | undefined>();
  const [password, setPassword] = useState<String | undefined>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Supplied credentials are bad lol");
      return;
    }

    const token = getToken(username, password);
    setToken(token);
  };

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Welcome! 👋🏻</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
              autoFocus
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <div className="buttons">
            <button id="login" type="submit">
              Log in
            </button>
            <button id="register" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
