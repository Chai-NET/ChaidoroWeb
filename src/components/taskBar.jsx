import TaskPanel from "./taskPanel.jsx";
import useEscape from "../services/useEscape.jsx";
// import taskPanelButtonIMG from "../img/taskPanelButton.png";
import { useState, useEffect } from "react";
import { Reorder } from "framer-motion";

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
        console.log("Todos: ", todos);
        setTodos([...todos]);
        setTask("");
      }
      console.log("You pressed Enter: ", task);
      console.log(todos);
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Task Panel Toggle:
  function toggleTaskPanel() {
    console.log("Panel Triggered", isPanelOpen);
    setIsPanelOpen(!isPanelOpen);
  }

  // Task Panel Close (for Escape key usage given below):
  function closeTaskPanel() {
    setIsPanelOpen(false);
    console.log("Close Panel Triggered");
  }
  // Esc to close the taskPanel
  useEscape(closeTaskPanel);

  return (
    <>
      <div className="">
        <div className="border-chocolate py-3 text-chocolate">
          <h2 className="text-accen font-Outfit text-xl font-semibold capitalize">
            to-do list
          </h2>
          <ul className="text-start">
            {todos.map((todo, index) => (
              <li
                className="flex items-center transition-all duration-500"
                key={index}
              >
                <button
                  className="peer pr-3 font-poppins text-3xl font-thin"
                  onClick={() => handleRemoveTodo(index)}
                >
                  o
                </button>
                <div className="line-clamp-1 font-Outfit transition-all duration-300 hover:line-clamp-3 hover:font-semibold hover:tracking-wide hover:text-coffee group-hover:text-red-600 peer-hover:text-red-600">
                  {todo}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Task Input Field */}
        <div class="w-full">
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
                  autocomplete="off"
                  className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit -tracking-tighter text-chocolate outline-none placeholder:text-coffee placeholder:opacity-90 focus:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
