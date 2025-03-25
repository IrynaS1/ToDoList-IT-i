/* import { useRef } from "react";
import type { FilterValues, Task } from "./App";
import { Button } from "./Button";

type Props = {
  title: string;
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  changeFilter: (filter: FilterValues) => void;
  addTask: (newTitle: string) => void;
};

export const TodolistItem = ({
  title,
  tasks,
  deleteTask,
  changeFilter,
  addTask,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input ref={inputRef} />
        <button
          onClick={() => {
            if (inputRef.current) {
              addTask(inputRef.current.value);
              inputRef.current.value = "";
            }
          }}
        >
          +
        </button>
        {/* <Button title={'+'}  /> */ /*}
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button title={"x"} onClick={() => deleteTask(task.id)} />
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button title={"All"} onClick={() => changeFilter("all")} />
        <Button title={"Active"} onClick={() => changeFilter("active")} />
        <Button title={"Completed"} onClick={() => changeFilter("completed")} />
      </div>
    </div>
  );
}; */

//-------------------------------
import { ChangeEvent, KeyboardEvent, useState } from "react";
import type { FilterValues, Task } from "./App";
import { Button } from "./Button";

type Props = {
  title: string;
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  changeFilter: (filter: FilterValues) => void;
  addTask: (newTitle: string) => void;
};

export const TodolistItem = ({
  title,
  tasks,
  deleteTask,
  changeFilter,
  addTask,
}: Props) => {
  const [newTitle, setNewTitle] = useState("");

  const changeFilterHandler = (value: FilterValues) => changeFilter(value);

  const addTaskHandler = () => {
    addTask(newTitle);
    setNewTitle("");
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTaskHandler();
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const mappedTasks = tasks.map((task) => {
    const deleteTaskHandler = () => deleteTask(task.id);
    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
        <Button onClick={deleteTaskHandler} title={"x"} />
      </li>
    );
  });

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={newTitle}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <Button onClick={addTaskHandler} title={"+"} />
      </div>
      {tasks.length === 0 ? <p>Тасок нет</p> : <ul>{mappedTasks}</ul>}
      <div>
        <Button onClick={() => changeFilterHandler("all")} title={"All"} />
        <Button
          onClick={() => changeFilterHandler("active")}
          title={"Active"}
        />
        <Button
          onClick={() => changeFilterHandler("completed")}
          title={"Completed"}
        />
      </div>
    </div>
  );
};
