import { Task } from "helpers/types";
import { useEffect, useState } from "react";

interface TaskInfo {
  task: Task;
  localIndex: number;
}

function Task({ task, localIndex }: TaskInfo) {
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
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
        alert("Correct answer!");
        return;
      } else {
        alert("Try again!");
      }
    } else {
      alert("Nothing picked!");
      return;
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
            <button type="submit" id="check">
              Check
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Task;
