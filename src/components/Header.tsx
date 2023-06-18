import { Link } from "react-router-dom";

import "styles/Header.css";

function logOut() {
  console.log("logging out...");
}

function Header() {
  return (
    <div className="header">
      <div className="userInfo">
        <h2 className="username">Username</h2>
        <h2 className="score">Score: 69</h2>
      </div>
      <div className="navigation">
        <Link className="link" to={`/`}>
            Leagues
        </Link>
        <Link className="link" to={`/`}>
            Courses
        </Link>
        <Link className="link" to={`/`}>
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
