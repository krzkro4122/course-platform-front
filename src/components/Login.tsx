import React, { FormEvent, useEffect, useState } from "react";

import {
  validatePassword,
  validateUsername,
  Username,
  Password,
  Token,
} from "../helpers/validation";
import { FormType } from "../helpers/validation";
import "../styles/Login.css";

interface ITokenHandlers {
  getToken: (username: Username, password: Password) => string;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
  setFormType: React.Dispatch<React.SetStateAction<FormType>>;
}

function Login({ setToken, getToken, setFormType }: ITokenHandlers) {
  const [username, setUsername] = useState<Username>();
  const [password, setPassword] = useState<Password>();
  const [usernameIsLegal, setUsernameIsLegal] = useState<boolean>(true);
  const [passwordIsLegal, setPasswordIsLegal] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setUsernameIsLegal(validateUsername(username));
    setPasswordIsLegal(validatePassword(password));
  }, [username, password]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);

    if (!usernameIsLegal || !passwordIsLegal) {
      return;
    }

    const token: Token = getToken(username, password);
    if (token !== undefined) setToken(token);
    else alert("Bad credentials!");
  }

  return (
    <div className="loginPage">
      <div className="loginForm">
        <h1>Welcome! 👋🏻</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
              className={
                (!usernameIsLegal && isSubmitted ? "invalid" : "") + " input"
              }
              autoFocus
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              className={
                (!passwordIsLegal && isSubmitted ? "invalid" : "") + " input"
              }
            />
          </label>
          <div className="buttons">
            <button id="login" className="button" type="submit">
              Log in
            </button>
          </div>
        </form>
        <button
          id="register"
          onClick={() => setFormType(FormType.Login)}
          className="button"
          type="submit"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
