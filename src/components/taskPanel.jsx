import { useState, useEffect } from "react";
import { GiTeapot } from "react-icons/gi";
import { TbSteam } from "react-icons/tb";
import TaskInputField from "./taskInputField.jsx";
import TaskList from "./taskList.jsx";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function TaskPanel() {
  const { t } = useTranslation();
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([]); //Can leave this empty

  // Functions:
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;
  // Load TODOs from local storage on app startup:
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos !== null && [...storedTodos].length !== 0) {
      setTodos(storedTodos);
      setTask("");
    }
    console.log("Local Storage:", todos[1]);
  }, []);

  // Update local storage whenever TODOs change:
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Task on keypress enter:
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
                {todos.length}
              </h2>
            </div>

            {/* Task Input Field Absolute */}
            <div className="mt-3 w-full">
              <TaskInputField
                task={task}
                onTaskChange={setTask}
                onKeyPress={handleKeyPress}
              />
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
              <TaskList
                todos={todos}
                onReorder={setTodos}
                onRemove={handleRemoveTodo}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
