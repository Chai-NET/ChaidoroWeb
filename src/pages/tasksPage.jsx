import { useState, useEffect } from "react";
import TaskInputField from "../components/taskInputField.jsx";
import Tasks from "../components/tasks.jsx";
import { FaSortAmountDown } from "react-icons/fa";
import { TbSteam } from "react-icons/tb";
import { GiTeapot } from "react-icons/gi";
import { useTranslation } from "react-i18next";
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
        <div className="relative flex select-none flex-col items-center justify-center gap-3 py-12 text-center font-Outfit">
          <h1 className="text-primary/45 text-xl font-light md:text-2xl">
            {t("emptyMsg")}
          </h1>
          <p className="tracking-tight text-secondary45">
            {t("emptyMsgDsc")}
            <br />
            {currentDate}.01 | © ChaiNET <br />
          </p>
          <div className="flex select-none items-center text-5xl font-black tracking-wide text-secondary45 md:text-7xl">
            <GiTeapot />
            <TbSteam size={35} className="text-primary/30" />
            <div className="scale-x-[-1]">
              <GiTeapot />
            </div>
          </div>
        </div>
      ) : (
        <Tasks todos={todos} setTodos={setTodos} />
      )}
    </div>
  );
}
