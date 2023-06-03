import { createContext } from "react";
import {
  Username,
  Password,
  Token,
} from "../helpers/validation";

const fetchAndSetToken = (username: Username, password: Password) => {

    // TODO - from API + token validation
    const token: Token = "";
    const tokenIsValid = true;

    if (tokenIsValid) {
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("token", token);
    }
}

const TokenContext = createContext(fetchAndSetToken);
export default TokenContext;