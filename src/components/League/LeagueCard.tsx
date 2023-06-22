import { Link } from "react-router-dom";
import { useContext } from "react";

import { League } from "helpers/types";
import { AuthContext } from "components/Authentication/AuthProvider";

interface leagueInfo {
  league: League;
}

function LeagueCard({ league }: leagueInfo) {
  const { setLeague } = useContext(AuthContext);

  const setColor = () => {
    document.documentElement.style.setProperty("--accent-color", league.color);
    document.documentElement.style.setProperty(
      "--accent-color-low-sat",
      league.color + "55"
    );
    setLeague(league.id);
  };

  return (
    <li
      className="browserCard"
      style={{
        border: `solid 0.2rem ${league.color}`,
      }}
    >
      <Link to={`/p12/league/${league.id}/courses`} onClick={() => setColor()}>
        <img
          className="browserCardImage"
          src={league.imageSrc}
          alt={`Image of the ${league.type} league.`}
        />
        <h1
          className="browserCardLabel"
          style={{
            color: `${league.color}`,
          }}
        >
          {league.type}
        </h1>
      </Link>
    </li>
  );
}

export default LeagueCard;
