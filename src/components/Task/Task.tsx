import { useEffect, useState, useContext } from "react";

import { Task } from "helpers/types";
import { AuthContext } from "components/Authentication/AuthProvider";

interface TaskInfo {
  task: Task;
  localIndex: number;
}

function Task({ task, localIndex }: TaskInfo) {
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
  const { user, setUser } = useContext(AuthContext);
  const handleCorrectAnswer = () => {
    setUser({
      id: user!.id,
      email: user!.email,
      leagueId: user!.leagueId,
      score: user!.score + 100,
    });
    alert("Correct answer!");
    return;
  };
  const handleIncorrectAnswer = () => {
    alert("Incorrect answer!");
    return;
  };
  const markAsPicked = (pi: number) => {
    setPickedIndex(pi);
  };

  useEffect(() => {
    setPickedIndex(null);
  }, [task]);

  const checkAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const answers = task.answers;
    const taskIndeces = [...Array(answers.length).keys()];

    if (taskIndeces.includes(pickedIndex!)) {
      if (answers.at(pickedIndex!)?.isCorrect) {
        return handleCorrectAnswer();
      } else {
        return handleIncorrectAnswer();
      }
    }
  };
  const { question, answers } = task;
  const answersFormatted = answers.map((answer, index) => {
    return (
      <label
        htmlFor={index.toString()}
        onClick={() => markAsPicked(index)}
        className={"answer " + (pickedIndex === index ? "picked" : "")}
        key={index}
      >
        <input
          type="radio"
          className="radio"
          id={index.toString()}
          name="answer"
          value={answer.text}
        ></input>
        <h4>{answer.text}</h4>
      </label>
    );
  });
  return (
    <div className="task">
      <form onSubmit={checkAnswer}>
        <fieldset>
          <legend>
            <h2>
              {localIndex + 1}. {question}
            </h2>
          </legend>
          <div id="answers">{answersFormatted}</div>
          <div id="checkContainer">
            <button type="submit" id="check" className={pickedIndex ? "" : "disabled"}>
              Check
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Task;
