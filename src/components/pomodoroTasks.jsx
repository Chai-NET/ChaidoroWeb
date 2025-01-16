import { useState, useEffect } from "react";
import { GiTeapot } from "react-icons/gi";
import { TbSteam } from "react-icons/tb";
import TaskInputField from "./taskInputField.jsx";
import Tasks from "./tasks.jsx";
import CompletedTasks from "./completedTasks.jsx";
import emptyTaskDrawing from "../assets/drawings/emptyTaskDrawing.webp";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function PomodoroTasks() {
  // Functions:
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;
  const { t } = useTranslation();

  // Load todos from localStorage on mount
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  });

  // Save todos to localStorage on change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Active tasks count:
  const activeTodosCount = todos.filter(
    (todo) => todo.status === "active",
  ).length;

  // Completed tasks count:
  const completedTodosCount = todos.filter(
    (todo) => todo.status === "completed",
  ).length;

  return (
    <>
      <div className="relative h-full w-full overflow-y-auto pb-9">
        <div className="relative font-Outfit">
          {/* - */}

          {/* Sticky Title and Input field */}
          <div className="sticky top-0 z-20 w-full rounded-b-xl border-secondary py-3 pt-6 backdrop-blur-md">
            {/* - */}

            {/* Title bar */}
            <div className="flex gap-1 font-bold">
              <h2 className="text-3xl font-semibold capitalize text-primary">
                {t("toDoList")}
              </h2>
              <h2 className="text-sm font-semibold text-secondary">
                {activeTodosCount}
              </h2>
            </div>

            {/* Task Input Field Absolute */}
            <div className="mt-3 w-full">
              <TaskInputField todos={todos} setTodos={setTodos} />
            </div>
            {/* - */}

            {/* A message for users */}
            {/* <p className="text-center font-Outfit font-light text-secondary">
              ٩(◕‿◕｡)۶
            </p> */}
          </div>

          {/* To-Do List */}
          <div className="">
            {/* Empty List Message: */}
            {todos.length === 0 ? (
              <div className="relative flex select-none flex-col justify-center gap-3 p-3 px-12 text-center font-Outfit">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-0.5 w-full bg-secondary45" />

                  <h1 className="text-primary/45 text-nowrap text-sm font-light tracking-wider md:text-lg">
                    {t("emptyMsg")}
                  </h1>
                  <div className="h-0.5 w-full bg-secondary45" />
                </div>

                <img
                  src={emptyTaskDrawing}
                  className="mx-auto w-80"
                  alt="Drawing for empty task list"
                />
              </div>
            ) : (
              <Tasks todos={todos} setTodos={setTodos} />
            )}
            {todos.length === 0 ? (
              <div className="absolute"></div>
            ) : (
              <div className="">
                <div className="flex items-center justify-center gap-3 font-bold">
                  <div className="h-0.5 w-full bg-secondary45" />
                  <div className="flex gap-1">
                    <h2 className="text-nowrap text-xl font-semibold capitalize text-primary">
                      Completed tasks
                    </h2>
                    <p className="text-sm font-semibold text-secondary">
                      {completedTodosCount}
                    </p>
                  </div>

                  <div className="h-0.5 w-full bg-secondary45" />
                </div>
                <CompletedTasks todos={todos} setTodos={setTodos} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
