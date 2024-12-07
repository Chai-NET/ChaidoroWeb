// import taskPanelButtonIMG from "../img/taskPanelButton.png";
import { useState, useEffect } from "react";
import { Reorder } from "motion/react";
import { GiTeapot, GiCoffeeCup } from "react-icons/gi";
import { TbSteam } from "react-icons/tb";
import { CiCircleChevUp, CiSquareCheck } from "react-icons/ci";
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

          <ul className="text-start font-poppins">
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
              <Reorder.Group values={todos} onReorder={setTodos}>
                {todos.map((todo, index) => (
                  <Reorder.Item value={todo} key={todo}>
                    <li key={index}>
                      <div className="my-3 flex flex-row items-center gap-3 hover:cursor-grab active:cursor-grabbing">
                        <div className="flex gap-1">
                          <button
                            className="peer aspect-square"
                            onClick={() => handleRemoveTodo(index)}
                          >
                            <CiSquareCheck className="size-5 fill-primary hover:fill-emerald-700" />
                          </button>
                          {/* Task Name */}
                          <div className="line-clamp-1 whitespace-nowrap font-Outfit text-primary transition-all duration-500 hover:line-clamp-3 hover:cursor-grab hover:font-semibold hover:tracking-wide hover:text-secondary active:cursor-grabbing group-hover:text-emerald-600 peer-hover:text-emerald-600">
                            {todo}
                          </div>
                        </div>
                        {/* Line betweeen */}
                        <hr className="w-full border-secondary" />
                        {/* Index on the list */}
                        <div className="item-end flex justify-end text-xs font-semibold text-secondary peer-has-[:checked]:hidden">
                          {index + 1}
                        </div>
                      </div>
                    </li>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            )}
          </ul>

          {/* Task Input Field */}
          {/* <div className="w-full">
            <div className="border-t border-secondary bg-bgPrimary">
              <div className="flex flex-row justify-between">
                <div className="flex flex-grow items-center gap-x-1 text-secondary">
                  <CiCircleChevUp />
                  <input
                    onKeyDown={handleKeyPress}
                    type="text"
                    maxLength={90}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    id="todos"
                    placeholder="Type here add your task"
                    autoComplete="off"
                    className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-primary outline-none placeholder:tracking-tight placeholder:text-secondary placeholder:opacity-90 focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* Task Input Field Absolute */}
          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 pb-9">
            <div className="z-10 border-t border-dashed border-secondary bg-bgPrimary pb-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-grow items-center gap-x-1 text-secondary">
                  <CiCircleChevUp
                    onClick={addTask}
                    className="size-5 cursor-pointer transition-all duration-300 hover:fill-primary"
                  />
                  <input
                    onKeyDown={handleKeyPress}
                    type="text"
                    maxLength={90}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    id="todos"
                    placeholder={t("taskAddMsg")}
                    autoComplete="off"
                    className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-primary outline-none placeholder:select-none placeholder:tracking-tight placeholder:text-secondary placeholder:opacity-90 focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
