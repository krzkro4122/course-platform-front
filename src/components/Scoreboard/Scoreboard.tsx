import { fetchUsers } from "helpers/fetchers";
import { useGuard } from "components/Authentication/useAuth";
import ScoreCard from "./ScoreCard";

import "styles/Scoreboard.css";

function Scoreboard() {
  const users = fetchUsers();
  const usersFormatted = users.map((user, index) => {
    return <ScoreCard user={user} key={index} />;
  }).sort();
  return useGuard(<div className="scoreboard">{usersFormatted}</div>);
}

export default Scoreboard;
