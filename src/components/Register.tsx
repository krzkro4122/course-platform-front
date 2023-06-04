import { FormEvent, useContext, useEffect, useState } from "react";

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
import { AuthContext } from "./AuthProvider";
import { Link, Navigate } from "react-router-dom";

function register() {
  const [username, setUsername] = useState<Username>();
  const [password, setPassword] = useState<Password>();
  const [firstName, setFirstName] = useState<FirstName>();
  const [lastName, setLastName] = useState<LastName>();
  const [passwordRepeat, setPasswordRepeat] = useState<Password>();
  const [usernameIsLegal, setUsernameIsLegal] = useState<boolean>(true);
  const [firstNameIsLegal, setFirstNameIsLegal] = useState<boolean>(true);
  const [lastNameIsLegal, setLastNameIsLegal] = useState<boolean>(true);
  const [passwordIsLegal, setPasswordIsLegal] = useState<boolean>(true);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { isAuthenticated, setIsAuthenticated, fetchAndSetToken } = useContext(AuthContext);


  useEffect(() => {
    setUsernameIsLegal(validateUsername(username));
    setFirstNameIsLegal(validateFirstName(firstName));
    setLastNameIsLegal(validateLastName(lastName));
    setPasswordIsLegal(validatePassword(password));
    setPasswordsMatch(password === passwordRepeat);
  }, [username, password, passwordRepeat, firstName, lastName]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);

    if (!usernameIsLegal || !passwordIsLegal || !passwordsMatch) {
      return;
    }

    fetchAndSetToken(username, password);
    setIsAuthenticated(true);
  }

  if (isAuthenticated) {
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
            <label>
              <input
                type="password"
                placeholder="Password (Repeat)"
                onChange={(event) => setPasswordRepeat(event.target.value)}
                className={
                  (!passwordsMatch && isSubmitted ? "invalid" : "") + " input"
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
