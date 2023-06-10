import { Task } from "../helpers/types";

import "../styles/Task.css";

interface TaskInfo {
  task: Task;
}

function Task({ task }: TaskInfo) {
  const { id, index, question, answers } = task;
  const answersFormatted = answers.map((answer, index) => {
    return (
      <div key={index}>
        <input type="radio" id={id} name="answer" value={answer.text}></input>
        <label htmlFor={id}>
          <h4>{answer.text}</h4>
        </label>
      </div>
    );
  });
  return (
    <div className="task">
      <form>
        <fieldset>
          <legend>
            <h2>
              {index + 1}. {question}
            </h2>
          </legend>
          <div>{answersFormatted}</div>
          <button type="submit">Check</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Task;
