import { Link } from "react-router-dom";

import { League } from "helpers/types";

interface leagueInfo {
  league: League;
}

function LeagueCard({ league }: leagueInfo) {

  const setColor = () => {
    document.documentElement.style.setProperty('--accent-color', league.color)
  };

  return (
    <li
      className="browserCard"
      style={{
        border: `solid 0.2rem ${league.color}`,
      }}
    >
      <Link
        to={`league/${league.id}/courses`}
        onClick={() => setColor()}
      >
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
        >{league.type}</h1>
      </Link>
    </li>
  );
}

export default LeagueCard;
