import useEscape from "../services/useEscape.jsx";
// import taskPanelButtonIMG from "../img/taskPanelButton.png";
import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import { GiTeapot, GiCoffeeCup } from "react-icons/gi";
import { TbSteam } from "react-icons/tb";

export default function TaskBar() {
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
        <div className="border-chocolate py-3 font-Outfit text-blax">
          <div className="my-1 flex gap-1 font-bold text-blax">
            <h2 className="text-3xl font-semibold capitalize">to-do list</h2>
            <h2 className="text-sm font-semibold">{todos.length}</h2>
          </div>

          <ul className="text-start font-poppins">
            {/* Empty List Message: */}
            {todos.length === 0 ? (
              <div className="relative flex select-none flex-col items-center justify-center gap-3 py-12 text-center font-Outfit">
                <h1 className="text-xl font-black text-chocolate/45 md:text-2xl">
                  List is empty !
                </h1>
                <p className="tracking-tight text-coffee/75">
                  Your to do list is empty but it is fine as long as cup is not.{" "}
                  <br />
                  {currentDate}.01 | © ChaiNET <br />
                </p>
                <div className="flex select-none items-center text-5xl font-black tracking-wide text-coffee/15 md:text-7xl">
                  <GiTeapot />
                  <TbSteam size={35} className="text-chocolate/30" />
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
                      <div className="flex flex-row items-center gap-3 hover:cursor-grab active:cursor-grabbing">
                        <div className="flex flex-row items-center">
                          <button
                            className="peer mb-1 pr-1 font-poppins text-3xl font-thin"
                            onClick={() => handleRemoveTodo(index)}
                          >
                            o
                          </button>
                          {/* Task Name */}
                          <div className="line-clamp-1 whitespace-nowrap font-Outfit transition-all duration-500 hover:line-clamp-3 hover:cursor-grab hover:font-semibold hover:tracking-wide hover:text-coffee active:cursor-grabbing group-hover:text-red-600 peer-hover:text-red-600">
                            {todo}
                          </div>
                        </div>
                        {/* Line betweeen */}
                        <hr className="w-full border-coffee" />
                        {/* Index on the list */}
                        <div className="item-end flex justify-end peer-has-[:checked]:hidden">
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
          <div className="w-full">
            <div className="border-t border-coffee bg-cream">
              <div className="flex flex-row justify-between">
                <div className="flex-grow">
                  <input
                    onKeyDown={handleKeyPress}
                    type="text"
                    maxLength={90}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    id="todos"
                    placeholder="Here add your task ฅ^•ﻌ•^ฅ"
                    autoComplete="off"
                    className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-chocolate outline-none placeholder:tracking-tight placeholder:text-coffee placeholder:opacity-90 focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Task Input Field Absolute */}
          {/* <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 pb-6">
            <div className="z-10 border-t border-coffee bg-cream pb-3">
              <div className="flex flex-row justify-between">
                <div className="flex-grow">
                  <input
                    onKeyDown={handleKeyPress}
                    type="text"
                    maxLength={90}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    id="todos"
                    placeholder="Here add your task ฅ^•ﻌ•^ฅ"
                    autoComplete="off"
                    className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-chocolate outline-none placeholder:tracking-tight placeholder:text-coffee placeholder:opacity-90 focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
           */}
        </div>
      </div>
    </>
  );
}
