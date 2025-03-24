import { useState } from "react";
import "./App.css";
import { TodolistItem } from "./TodolistItem";

export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export type FilterValueType =
  | "All"
  | "Active"
  | "Completed"
  | "DELETE ALL TASKS"
  | "First 3 tasks";

export const App = () => {
  let [tasks, setTasks] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Typescript", isDone: false },
    { id: 6, title: "RTK query", isDone: false },
  ]);

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // короткая запись
  };

  const [valueD, setValueD] = useState("All");

  const durshlagFoo = () => {
    let durshlag = tasks;

    switch (valueD) {
      case "Active":
        return (durshlag = tasks.filter((task) => task.isDone === false));
      case "Completed":
        return (durshlag = tasks.filter((task) => task.isDone === true));
      case "DELETE ALL TASKS":
        return (durshlag = []);
      case "First 3 tasks":
        return (durshlag = tasks.slice(0, 3));
    }
    return durshlag;
  };

  const changeFilter = (value: FilterValueType) => {
    setValueD(value);
  };

  let durshlagValue = durshlagFoo();

  return (
    <div className="app">
      <TodolistItem
        title="What to learn"
        tasks={durshlagValue}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
};
