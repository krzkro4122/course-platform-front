import { FormEvent, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { validatePassword, validateEmail } from "helpers/validation";
import { AuthContext } from "./AuthProvider";
import { usePermit } from "./useAuth";

import "styles/Auth.css";
import { Email, Password } from "helpers/types";

function Login() {
  const [email, setEmail] = useState<Email>();
  const [password, setPassword] = useState<Password>();
  const [emailIsLegal, setEmailIsLegal] = useState<boolean>(true);
  const [passwordIsLegal, setPasswordIsLegal] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { fetchAndSetUser, setUser } = useContext(AuthContext);

  useEffect(() => {
    setEmailIsLegal(validateEmail(email));
    setPasswordIsLegal(validatePassword(password));
  }, [email, password]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);

    if (!emailIsLegal || !passwordIsLegal) {
      return;
    }

    fetchAndSetUser(email, password);
  }
  return usePermit(
    <div className="page">
      <div className="formContainer">
        <h1>Welcome! 👋🏻</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              className={
                (!emailIsLegal && isSubmitted ? "invalid" : "") + " input"
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
            <Link id="re-route" className="button" to="/p12/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>,
    "/p12/"
  );
}

export default Login;
