import React, { FormEvent, useContext, useEffect, useState } from "react";

import {
  validatePassword,
  validateUsername,
  validateFirstName,
  validateLastName,
  Username,
  Password,
  FirstName,
  LastName,
} from "../helpers/validation";
import "../styles/Auth.css";
import TokenContext from "./TokenContext";
import { Link, Navigate } from "react-router-dom";

interface TaskDashboardProps {
  authentication: {
    get: boolean;
    set: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

function register({ authentication }: TaskDashboardProps) {
  const [username, setUsername] = useState<Username>();
  const [password, setPassword] = useState<Password>();
  const [firstName, setFirstName] = useState<FirstName>();
  const [lastName, setLastName] = useState<LastName>();
  const [usernameIsLegal, setUsernameIsLegal] = useState<boolean>(true);
  const [firstNameIsLegal, setFirstNameIsLegal] = useState<boolean>(true);
  const [lastNameIsLegal, setLastNameIsLegal] = useState<boolean>(true);
  const [passwordIsLegal, setPasswordIsLegal] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const fetchAndSetToken = useContext(TokenContext).fetchAndSetToken;

  useEffect(() => {
    setUsernameIsLegal(validateUsername(username));
    setFirstNameIsLegal(validateFirstName(firstName));
    setLastNameIsLegal(validateLastName(lastName));
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
          <h1>Register 📝</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Username / E-mail"
                onChange={(event) => setUsername(event.target.value)}
                className={
                  (!usernameIsLegal && isSubmitted ? "invalid" : "") + " input"
                }
                autoFocus
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="First Name"
                onChange={(event) => setFirstName(event.target.value)}
                className={
                  (!firstNameIsLegal && isSubmitted ? "invalid" : "") + " input"
                }
                autoFocus
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(event) => setLastName(event.target.value)}
                className={
                  (!lastNameIsLegal && isSubmitted ? "invalid" : "") + " input"
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
                Sign up
              </button>
              <Link id="re-route" className="button" to="/login">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default register;
