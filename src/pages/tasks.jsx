import React, { useState, useEffect } from "react";
import TaskInputField from "../components/taskInputField.jsx";
import { FaCheck, FaSortAmountDown } from "react-icons/fa";
import { AnimatePresence, motion, Reorder } from "motion/react";
import { TbSteam } from "react-icons/tb";
import { GiTeapot } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import "../customCSS/noScroll.css"; // Custom CSS that removes Scroll bar

function Tasks() {
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
      setTask("");
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
            <AnimatePresence>
              {todos.map((todo, index) => (
                <Reorder.Item value={todo} key={todo}>
                  <li key={index}>
                    <motion.div
                      initial={{
                        scale: 0.7,
                        opacity: 0,
                        filter: "blur(10px)",
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{ scale: 0.7, opacity: 0, filter: "blur(10px)" }}
                      className="m-3 my-5 flex flex-row items-center justify-between gap-3 rounded-lg border-blax bg-neutral-50 p-3 pr-6 shadow-sm shadow-neutral-500 hover:cursor-grab active:cursor-grabbing"
                    >
                      <div className="flex items-center gap-3">
                        <button
                          className="group peer aspect-square rounded-full border border-emerald-600 border-secondary p-1 transition-all duration-300 ease-in-out hover:bg-emerald-600"
                          onClick={() => handleRemoveTodo(index)}
                        >
                          <FaCheck className="size-3 fill-emerald-300 opacity-0 transition-all duration-100 ease-in-out group-hover:fill-white group-hover:opacity-100" />
                        </button>
                        <div className="line-clamp-1 whitespace-nowrap font-Outfit text-lg font-medium text-primary transition-all duration-500 first-letter:uppercase hover:line-clamp-3 hover:cursor-grab hover:font-semibold hover:tracking-wide hover:text-secondary active:cursor-grabbing group-hover:text-emerald-600 peer-hover:font-bold peer-hover:tracking-wider">
                          {todo}
                        </div>
                      </div>
                      <div className="item-end flex justify-end text-xs font-semibold text-secondary peer-has-[:checked]:hidden">
                        {index + 1}
                      </div>
                    </motion.div>
                  </li>
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </ul>
      )}

      {/* Task Input Field */}
      <div className="mb-24">
        <TaskInputField
          task={task}
          onTaskChange={setTask}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default Tasks;
