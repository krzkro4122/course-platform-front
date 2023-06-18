import { User } from "helpers/types";

interface ScoreInfo {
  user: User;
}

function ScoreCard({ user }: ScoreInfo) {
  return (
    <li className="scoreCard">
      {user.score}: {user.username}
    </li>
  );
}

export default ScoreCard;
