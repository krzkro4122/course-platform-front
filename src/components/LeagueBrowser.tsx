import { fetchLeagues } from "../helpers/fetchers";
import League from "./LeagueCard";
import { useGuard } from "./useAuth";

function LeagueBrowser() {
  const leagues = fetchLeagues();
  const leaguesFormatted = leagues.map((league, index) => {
    return <League league={league} key={index} />;
  });
  return useGuard(<div className="leagueBrowser">{leaguesFormatted}</div>);
}

export default LeagueBrowser;
