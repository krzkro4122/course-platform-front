import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { encode } from "js-base64";
import { User, Password, Email } from "helpers/types";

const BACKEND_ORIGIN = "http://207.154.246.164:8090";
const BACKEND_LOGIN = `${BACKEND_ORIGIN}/auth/login`;
const BACKEND_REGISTER = `${BACKEND_ORIGIN}/auth/register`;

interface authInfo {
  user: User | null;
  unsetUser: () => void;
  setLeague: (leagueId: string) => void;
  setUser: Dispatch<SetStateAction<User | null>>;
  fetchAndSetUser: (email: Email, password: Password) => void;
}

export const AuthContext = createContext<authInfo>({} as authInfo);

interface AuthProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchLoginAndSetUser = async (
    email: Email,
    password: Password
  ) => {
    console.log(`Fetching from ${BACKEND_LOGIN}...`);

    return await fetch(BACKEND_LOGIN, {
      method: "POST",
      mode: "no-cors",
      headers: {
        Authorization: "Basic " + encode(email + ":" + password),
      },
    })
      .then(function (res) {
        console.log(res.status);
        // console.log(res.body);
        if (res.status == 200) return res.text();
      })
      .then(function (token) {
        console.log(token);
        const mockUser: User = {
          email: email,
          score: 0,
          leagueId: null,
          id: "0",
        };
        const mockUserJson = JSON.stringify(mockUser);
        localStorage.setItem("user", mockUserJson);
        setUser(mockUser);
        return token;
      });
  };

  const unsetUser = () => {
    localStorage.setItem("user", "null");
    setUser(null);
  };

  const setLeague = (leagueId: string) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user!, leagueId: leagueId })
    );
    setUser({ ...user!, leagueId: leagueId });
  };

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      const user = JSON.parse(userJson);
      if (user) setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        fetchAndSetUser: fetchLoginAndSetUser,
        unsetUser,
        setLeague,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
