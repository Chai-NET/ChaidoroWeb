import "../customCSS/noScroll.css"; //Custom CSS that removes Scroll bar of the element
import { FaSortAmountDown } from "react-icons/fa";
import { CiCircleChevUp, CiSquareCheck } from "react-icons/ci";
import { Reorder } from "framer-motion";
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
        <div className="text-primary flex flex-col gap-1 py-3 font-Outfit text-3xl font-bold">
          <div className="flex items-center justify-between">
            <h2>{t("toDoList")}</h2>
            <FaSortAmountDown size={24} />
          </div>
          <h2 className="text-secondary text-base font-semibold tracking-wide">
            {t("remainingTasks")} {todos.length}
          </h2>
        </div>
        <ul className="text-start font-poppins">
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
                        <CiSquareCheck className="fill-primary size-6 hover:fill-emerald-700" />
                      </button>
                      {/* Task Name */}
                      <div className="text-primary hover:text-secondary line-clamp-1 whitespace-nowrap font-Outfit transition-all duration-500 hover:line-clamp-3 hover:cursor-grab hover:font-semibold hover:tracking-wide active:cursor-grabbing group-hover:text-emerald-600 peer-hover:text-emerald-600">
                        {todo}
                      </div>
                    </div>
                    {/* Line betweeen */}
                    <hr className="border-secondary w-full" />
                    {/* Index on the list */}
                    <div className="item-end text-secondary flex justify-end text-xs font-semibold peer-has-[:checked]:hidden">
                      {index + 1}
                    </div>
                  </div>
                </li>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </ul>

        {/* Task Input Field */}
        <div className="my-3 w-full">
          <div className="border-secondary bg-bgPrimary border-t">
            <div className="flex flex-row justify-between">
              <div className="text-secondary flex flex-grow items-center gap-x-1">
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
                  className="text-primary placeholder:text-secondary peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest outline-none placeholder:tracking-tight placeholder:opacity-90 focus:ring-0"
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
