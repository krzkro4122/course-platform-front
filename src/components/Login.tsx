import { FormEvent, useContext, useEffect, useState } from "react";

import {
  validatePassword,
  validateUsername,
  Username,
  Password,
} from "../helpers/validation";
import "../styles/Auth.css";
import TokenContext from "./TokenContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface TaskDashboardProps {
  authentication: {
    get: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

function Login({ authentication }: TaskDashboardProps) {
  const [username, setUsername] = useState<Username>();
  const [password, setPassword] = useState<Password>();
  const [usernameIsLegal, setUsernameIsLegal] = useState<boolean>(true);
  const [passwordIsLegal, setPasswordIsLegal] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fetchAndSetToken = useContext(TokenContext).fetchAndSetToken;

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

    fetchAndSetToken(username, password);
    authentication.set(true);
  }

  if (authentication.get) {
    console.log("Navigating to /...");
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="page">
        <div className="formContainer">
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
              <button id="submit" className="button" type="submit">
                Log in
              </button>
              <Link id="re-route" className="button" to="/register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
