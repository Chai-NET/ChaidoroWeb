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
        <div className="flex flex-col gap-1 py-3 font-Outfit text-3xl font-bold text-chocolate">
          <div className="flex items-center justify-between">
            <h2>{t("toDoList")}</h2>
            <FaSortAmountDown size={24} />
          </div>
          <h2 className="text-base font-semibold tracking-wide text-coffee">
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
                        <CiSquareCheck className="size-6 fill-chocolate hover:fill-emerald-700" />
                      </button>
                      {/* Task Name */}
                      <div className="line-clamp-1 whitespace-nowrap font-Outfit text-chocolate transition-all duration-500 hover:line-clamp-3 hover:cursor-grab hover:font-semibold hover:tracking-wide hover:text-coffee active:cursor-grabbing group-hover:text-emerald-600 peer-hover:text-emerald-600">
                        {todo}
                      </div>
                    </div>
                    {/* Line betweeen */}
                    <hr className="w-full border-coffee" />
                    {/* Index on the list */}
                    <div className="item-end flex justify-end text-xs font-semibold text-coffee peer-has-[:checked]:hidden">
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
          <div className="border-t border-coffee bg-cream">
            <div className="flex flex-row justify-between">
              <div className="flex flex-grow items-center gap-x-1 text-coffee">
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
                  className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-chocolate outline-none placeholder:tracking-tight placeholder:text-coffee placeholder:opacity-90 focus:ring-0"
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
