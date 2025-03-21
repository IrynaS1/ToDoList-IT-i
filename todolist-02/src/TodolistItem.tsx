
import type { FilterValueType, Task } from "./App";
import { Button } from "./Button";

type Props = {
  title: string;
  tasks: Task[];
  removeTask: (taskId: number) => void;
 changeFilter: (value: FilterValueType) => void;
};

export const TodolistItem = ({
  title,
  tasks,
  removeTask,
changeFilter}: 
Props) => {
  /* const [valueD, setValueD] = useState("All");

  const durshlagFoo = () => {
    let durshlag = tasks;

    switch (valueD) {
      case "Active":
        return (durshlag = tasks.filter((task) => task.isDone === false));
      case "Completed":
        return (durshlag = tasks.filter((task) => task.isDone === true));
    }
    return durshlag;
  };

  const changeFilter = (value: FilterValueType) => {
    setValueD(value);
  };

  let durshlagValue = durshlagFoo(); */

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title={"+"} />
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <button
                  style={{ marginRight: "10px" }}
                  onClick={() => removeTask(task.id)}
                >
                  x
                </button>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <button onClick={() => changeFilter("All")}>All</button>
        <button onClick={() => changeFilter("Active")}>Active</button>
        <button onClick={() => changeFilter("Completed")}>Completed</button>
        {/*       <Button title={"All"} />
        <Button title={"Active"} />
        <Button title={"Completed"} /> */}
      </div>
    </div>
  );
};
