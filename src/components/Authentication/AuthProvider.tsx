import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { User, Username, Password } from "helpers/types";

interface authInfo {
  user: User | null;
  unsetUser: () => void;
  setLeague: (leagueId: string) => void;
  setUser: Dispatch<SetStateAction<User | null>>;
  fetchAndSetUser: (username: Username, password: Password) => void;
}

export const AuthContext = createContext<authInfo>({} as authInfo);

interface AuthProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchAndSetUser = (username: Username, password: Password) => {
    // TODO - from API + token validation
    // const token: Token = "";
    const mockUser: User = {
      id: "0",
      username: username,
      score: 0,
      leagueId: null,
    };
    const mockUserJson = JSON.stringify(mockUser);
    localStorage.setItem("user", mockUserJson);
    setUser(mockUser);
    return mockUser;
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
        fetchAndSetUser,
        unsetUser,
        setLeague,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
