import { User } from "helpers/types";

interface ScoreInfo {
  user: User;
  index: number;
}

function ScoreCard({ user, index }: ScoreInfo) {
  return (
    <li className="scoreCard">
      <span>
        {index + 1}. {user.username}
      </span>
      <span className="score">Score: {user.score}</span>
    </li>
  );
}

export default ScoreCard;
