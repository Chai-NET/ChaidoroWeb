// import taskPanelButtonIMG from "../img/taskPanelButton.png";
import { useState, useEffect } from "react";
import { Reorder } from "motion/react";
import { GiTeapot } from "react-icons/gi";
import { TbSteam } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import TaskInputField from "../components/taskInputField.jsx";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function TaskBar() {
  const { t } = useTranslation();
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([]); //Can leave this empty
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Functions:

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
    if (e.key === "Enter") {
      if (task.trim() !== "") {
        todos.push(task);
        setTodos([...todos]);
        setTask("");
      }
    }
  };

  const addTask = () => {
    if (task.trim() !== "") {
      todos.push(task);
      setTodos([...todos]);
      setTask("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  return (
    <>
      <div className="h-full overflow-y-scroll pb-9">
        <div className="border-primary py-3 font-Outfit">
          <div className="my-1 flex gap-1 font-bold">
            <h2 className="text-3xl font-semibold capitalize text-primary">
              {t("toDoList")}
            </h2>
            <h2 className="text-sm font-semibold text-secondary">
              {todos.length}
            </h2>
          </div>

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
            <ul className="my-6 pb-12 text-start font-poppins">
              <Reorder.Group values={todos} onReorder={setTodos}>
                {todos.map((todo, index) => (
                  <Reorder.Item value={todo} key={todo}>
                    <li key={index}>
                      {/* Individual task */}
                      <div className="m-3 my-5 flex flex-row items-center justify-between gap-3 rounded-lg border-blax bg-neutral-50 p-3 pr-6 shadow-sm shadow-neutral-500 hover:cursor-grab active:cursor-grabbing">
                        <div className="flex items-center gap-3">
                          <button
                            className="group peer aspect-square rounded-full border border-emerald-600 border-secondary p-1 transition-all duration-300 ease-in-out hover:bg-emerald-600"
                            onClick={() => handleRemoveTodo(index)}
                          >
                            <FaCheck className="size-3 fill-emerald-300 opacity-0 transition-all duration-100 ease-in-out group-hover:fill-white group-hover:opacity-100" />
                          </button>
                          {/* Task Name */}
                          <div className="line-clamp-1 whitespace-nowrap font-Outfit text-lg font-medium text-primary transition-all duration-500 first-letter:uppercase hover:line-clamp-3 hover:cursor-grab hover:font-semibold hover:tracking-wide hover:text-secondary active:cursor-grabbing group-hover:text-emerald-600 peer-hover:font-bold peer-hover:tracking-wider">
                            {todo}
                          </div>
                        </div>
                        {/* Line betweeen */}
                        {/* <hr className="w-full border-secondary" /> */}
                        {/* Index on the list */}
                        <div className="item-end flex justify-end text-xs font-semibold text-secondary peer-has-[:checked]:hidden">
                          {index + 1}
                        </div>
                      </div>
                    </li>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </ul>
          )}

          {/* Task Input Field Absolute */}
          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2">
            <TaskInputField
              task={task}
              onTaskChange={setTask}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </>
  );
}
