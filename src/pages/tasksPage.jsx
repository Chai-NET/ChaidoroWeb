import { useState, useEffect } from "react";
import TaskInputField from "../components/taskInputField.jsx";
import Tasks from "../components/tasks.jsx";
import { FaSortAmountDown } from "react-icons/fa";
import { TbSteam } from "react-icons/tb";
import { GiTeapot } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import emptyTaskDrawing from "../assets/drawings/emptyTaskDrawing.webp";

import "../customCSS/noScroll.css"; // Custom CSS that removes Scroll bar

export default function TasksPage() {
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

  return (
    <div className="h-full overflow-y-scroll">
      <div className="flex flex-col gap-1 py-3 font-Outfit text-3xl font-semibold text-primary">
        <div className="flex items-center justify-between">
          <h2>{t("toDoList")}</h2>
          <div className="rounded-lg bg-white p-3">
            <FaSortAmountDown size={18} />
          </div>
        </div>
        <h2 className="text-base font-light tracking-wider text-secondary">
          {t("remainingTasks")} {todos.length}
        </h2>
      </div>
      <TaskInputField todos={todos} setTodos={setTodos} />
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
            className="mx-auto w-2/3"
            alt="Drawing for empty task list"
          />
        </div>
      ) : (
        <Tasks todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
}
