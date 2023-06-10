import { Link } from "react-router-dom";
import { League } from "../helpers/types";

interface leagueInfo {
  league: League;
}

function LeagueCard({ league }: leagueInfo) {
  return (
    <li>
      <Link to={`league/${league.id}/courses`}>
        <img
          src={league.imageSrc}
          alt={`Image of the ${league.type} league.`}
        />
        <h1>{league.type}</h1>
      </Link>
    </li>
  );
}

export default LeagueCard;
