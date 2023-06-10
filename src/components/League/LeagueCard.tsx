import { Link } from "react-router-dom";

import { League } from "helpers/types";

interface leagueInfo {
  league: League;
}

function LeagueCard({ league }: leagueInfo) {
  return (
    <li className="browserCard">
      <Link to={`league/${league.id}/courses`}>
        <img
          className="browserCardImage"
          src={league.imageSrc}
          alt={`Image of the ${league.type} league.`}
        />
        <h1 className="browserCardLabel">{league.type}</h1>
      </Link>
    </li>
  );
}

export default LeagueCard;
