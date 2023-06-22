import { Link } from "react-router-dom";

import { AuthContext } from "./Authentication/AuthProvider";
import { useContext } from "react";

import "styles/Header.css";

function Header() {
  const { unsetUser, user } = useContext(AuthContext);

  function logOut() {
    console.log("logging out...");
    unsetUser();
  }

  if (!user) {
    return (<div></div>);
  }

  return (
    <div className="header">
      <div className="userInfo">
        <h2 className="username">{user?.username}</h2>
        <h2 className="score">Score: {user?.score}</h2>
      </div>
      <div className="navigation">
        <Link className="link" to={`/p12/`}>
          Leagues
        </Link>
        <Link
          className={user?.leagueId ? "link" : "link disabled"}
          to={`/p12/league/${user?.leagueId}/courses`}
        >
          Courses
        </Link>
        <Link className="link" to={`/p12/scoreboard`}>
          Scoreboard
        </Link>
      </div>
      <span className="log-out" onClick={logOut}>
        Log out
      </span>
    </div>
  );
}

export default Header;
