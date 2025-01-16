import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaCheck, FaPen, FaTrash, FaHandPaper } from "react-icons/fa";

export default function CompletedTasks({ todos, setTodos }) {
  // Functions:
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  // Read and write for local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos !== null && [...storedTodos].length !== 0) {
      setTodos(storedTodos);
    }
  }, []);

  // Updates the local storage each time change happens
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Marks task as completed
  const handleCompleteTodo = (id) => {
    const timestamp = new Date().getTime();
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, status: "completed", completedAt: timestamp }
          : todo,
      );
    });
  };

  // Removes the task from the storage
  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Interval for archiving the completed tasks
  useEffect(() => {
    const checkForArchivedTodos = () => {
      const currentTime = new Date().getTime();
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (
            todo.status === "completed" &&
            currentTime - todo.completedAt > 86400000
          ) {
            return { ...todo, status: "archived" };
          }
          return todo;
        });
      });
    };

    const interval = setInterval(checkForArchivedTodos, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="my-6 pb-12 text-start font-poppins">
      <AnimatePresence>
        {todos
          .filter((todo) => todo.status === "completed")
          .map((todo, index) => (
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
                className="group m-3 my-5 flex flex-row items-center justify-between gap-3 rounded-lg border border-accent bg-neutral-50 p-3 pr-6 shadow-sm shadow-secondary transition-all duration-300 ease-in-out hover:cursor-grab hover:border-accent active:cursor-grabbing"
              >
                <div className="flex items-center gap-3">
                  {/* Completed button */}
                  <button
                    className="peer aspect-square p-1 transition-all duration-300 ease-in-out"
                    onClick={() => handleRemoveTodo(todo.id)}
                  >
                    <FaTrash className="size-4 fill-red-400 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
                  </button>
                  <div className="line-clamp-1 whitespace-nowrap font-Outfit text-lg font-medium tracking-wide text-secondary transition-all duration-500 first-letter:uppercase hover:line-clamp-3 hover:cursor-grab active:cursor-grabbing group-hover:font-semibold group-hover:text-accent peer-hover:font-bold peer-hover:tracking-widest">
                    {todo.task}
                  </div>
                </div>
                <div className="relative flex items-center justify-end gap-2 text-xs font-semibold text-secondary peer-has-[:checked]:hidden">
                  {/* Buttons:*/}
                  {/* <div className="absolute flex gap-3 pr-3">
                    <button
                      className="aspect-square rotate-90 rounded-full border-t border-secondary bg-white p-2 opacity-0 transition-all delay-0 duration-300 ease-in-out group-hover:-translate-y-6 group-hover:rotate-0 group-hover:opacity-100"
                      onClick={() => console.log("Current id is: ", todo.id)}
                    >
                      <FaPen className="size-4 fill-blue-300 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
                    </button>

                    <button
                      className="aspect-square rotate-90 rounded-full border-t border-secondary bg-white p-2 opacity-0 transition-all delay-100 duration-300 ease-in-out group-hover:-translate-y-6 group-hover:rotate-0 group-hover:opacity-100"
                      onClick={() => handleRemoveTodo(todo.id)}
                    >
                      <FaTrash className="size-4 fill-red-400 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
                    </button>
                  </div> */}
                </div>
              </motion.div>
            </li>
          ))}
      </AnimatePresence>
    </ul>
  );
}
