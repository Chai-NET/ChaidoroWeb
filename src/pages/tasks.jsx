import "../customCSS/noScroll.css"; //Custom CSS that removes Scroll bar of the element
import { FaCheck, FaSortAmountDown } from "react-icons/fa";
import { CiCircleChevUp, CiSquareCheck } from "react-icons/ci";
import { Reorder } from "motion/react";
import { useState, useEffect } from "react";
import { TbSteam } from "react-icons/tb";
import "../i18n";
import { useTranslation } from "react-i18next";

function Tasks() {
  const { t } = useTranslation();
  const [task, setTask] = useState();
  const [todos, setTodos] = useState([]); //Can leave this empty

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
  return (
    <>
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
        {/* To-do List */}
        <ul className="my-6 pb-12 text-start font-poppins">
          <Reorder.Group values={todos} onReorder={setTodos}>
            {todos.map((todo, index) => (
              <Reorder.Item value={todo} key={todo}>
                <li key={index}>
                  {/* Individual task */}
                  <div className="my-2 flex flex-row items-center justify-between gap-3 rounded-lg border-b border-secondary bg-neutral-100 p-2 pr-6 hover:cursor-grab active:cursor-grabbing">
                    <div className="flex items-center gap-3">
                      <button
                        className="group peer aspect-square rounded-lg border border-secondary p-1 transition-all duration-300 ease-in-out hover:bg-primary"
                        onClick={() => handleRemoveTodo(index)}
                      >
                        <FaCheck className="size-3 fill-primary opacity-0 transition-all duration-100 ease-in-out group-hover:fill-white group-hover:opacity-100" />
                      </button>
                      {/* Task Name */}
                      <div className="line-clamp-1 whitespace-nowrap font-Outfit text-primary transition-all duration-1000 first-letter:uppercase hover:line-clamp-3 hover:cursor-grab hover:font-semibold hover:tracking-wide hover:text-secondary active:cursor-grabbing group-hover:text-emerald-600 peer-hover:tracking-widest">
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

        {/* Task Input Field */}
        <div className="my-3 w-full pb-9">
          <div className="border-t border-secondary bg-bgPrimary">
            <div className="flex flex-row justify-between">
              <div className="flex flex-grow items-center gap-x-1 text-secondary">
                <TbSteam />
                <input
                  onKeyDown={handleKeyPress}
                  type="text"
                  maxLength={90}
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  id="todos"
                  placeholder={t("taskAddMsg")}
                  autoComplete="off"
                  className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-primary outline-none placeholder:tracking-tight placeholder:text-secondary placeholder:opacity-90 focus:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
