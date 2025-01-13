import React, { useState, useEffect } from "react";
import TaskInputField from "../components/taskInputField.jsx";
import Tasks from "../components/tasks.jsx";
import { FaSortAmountDown } from "react-icons/fa";
import { TbSteam } from "react-icons/tb";
import { GiTeapot } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import "../customCSS/noScroll.css"; // Custom CSS that removes Scroll bar

function TaskList() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  const { t } = useTranslation();
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos !== null && [...storedTodos].length !== 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, task]);
      setTask("");
    }
  };

  const handleRemoveTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

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
      <TaskInputField
        task={task}
        onTaskChange={setTask}
        onKeyPress={handleKeyPress}
      />
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
        <Tasks todos={todos} onReorder={setTodos} onRemove={handleRemoveTodo} />
      )}
    </div>
  );
}

export default TaskList;
