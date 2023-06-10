import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Username, Password } from "../../helpers/validation";

const fetchAndSetToken = (username: Username, password: Password) => {
  // TODO - from API + token validation
  // const token: Token = "";
  const tokenIsValid = true;

  if (tokenIsValid) {
    localStorage.setItem("authenticated", "true");
  }
};

interface authInfo {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  fetchAndSetToken: (username: Username, password: Password) => void;
}

export const AuthContext = createContext<authInfo>({} as authInfo);

interface AuthProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    setIsAuthenticated(authenticated === "true");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        fetchAndSetToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
