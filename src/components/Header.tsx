import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./Authentication/AuthProvider";
import LightningLogo from "assets/lightningDynamic.svg";

import "styles/Header.css";

function Header() {
  const { unsetUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  function logOut() {
    console.log("logging out...");
    unsetUser();
    navigate("/p12");
  }

  if (!user) {
    return <div></div>;
  }

  return (
    <div className="header">
      <div className="userInfo">
        <img id="logo" src={LightningLogo} alt="Lightning icon" />
        <h2 className="email">{user?.email}</h2>
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
