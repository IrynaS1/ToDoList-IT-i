import { Task } from "../App";
import { Button } from "./Button";
import { ToDoItem } from "./ToDoItem";

type Props = {
  title: string;
  tasks: Task[];
  date?: string;
};

export const TodolistItem = ({ title, tasks, date }: Props) => {
  const mappedTasks = tasks.map((task) => {
    return (
      <ToDoItem
        key={task.id}
        title={task.title}
        id={task.id}
        isDone={task.isDone}
      />
    );
  });

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title={"+"} />
      </div>

      {tasks.length === 0 ? <p>Тасок нет</p> : <ul>{mappedTasks}</ul>}

      <div>
        <Button title={"All"} />
        <Button title={"Active"} />
        <Button title={"Completed"} />
      </div>
      <div>{date}</div>
    </div>
  );
};
