import { AnimatePresence, motion, Reorder } from "motion/react";
import { FaCheck, FaPen, FaTrash, FaHandPaper } from "react-icons/fa";

const Tasks = ({ todos, onReorder, onRemove, onComplete }) => {
  return (
    <ul className="my-6 pb-12 text-start font-poppins">
      <Reorder.Group values={todos} onReorder={onReorder}>
        <AnimatePresence>
          {todos
            .filter((todo) => todo.status === "active")
            .map((todo, index) => (
              <Reorder.Item value={todo} key={todo.id}>
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
                    className="group m-3 my-5 flex flex-row items-center justify-between gap-3 rounded-lg border-b border-secondary bg-white p-3 pr-6 shadow-sm shadow-secondary transition-all duration-300 ease-in-out hover:cursor-grab hover:border-accent active:cursor-grabbing"
                  >
                    <div className="flex items-center gap-3">
                      {/* Completed button */}
                      <button
                        className="peer aspect-square rounded-full border border-emerald-600 border-secondary p-1 transition-all duration-300 ease-in-out hover:bg-emerald-600"
                        onClick={() => onComplete(index)}
                      >
                        <FaCheck className="size-3 fill-white opacity-0 transition-all duration-100 ease-in-out group-hover:opacity-100" />
                      </button>
                      <div className="line-clamp-1 whitespace-nowrap font-Outfit text-lg font-medium text-primary transition-all duration-500 first-letter:uppercase hover:line-clamp-3 hover:cursor-grab active:cursor-grabbing group-hover:font-semibold group-hover:tracking-wide group-hover:text-accent peer-hover:font-bold peer-hover:tracking-widest peer-hover:text-emerald-600 peer-hover:line-through">
                        {todo.task}
                      </div>
                    </div>
                    <div className="relative flex items-center justify-end gap-2 text-xs font-semibold text-secondary peer-has-[:checked]:hidden">
                      {/* Buttons:*/}
                      <div className="absolute flex gap-3 pr-3">
                        {/* Edit button */}
                        <button
                          className="aspect-square rotate-90 rounded-full border-t border-secondary bg-white p-2 opacity-0 transition-all delay-0 duration-300 ease-in-out group-hover:-translate-y-6 group-hover:rotate-0 group-hover:opacity-100"
                          onClick={() => console.log("Clicked")}
                        >
                          <FaPen className="size-4 fill-blue-300 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
                        </button>

                        {/* Remove button */}
                        <button
                          className="aspect-square rotate-90 rounded-full border-t border-secondary bg-white p-2 opacity-0 transition-all delay-100 duration-300 ease-in-out group-hover:-translate-y-6 group-hover:rotate-0 group-hover:opacity-100"
                          onClick={() => onRemove(index)}
                        >
                          <FaTrash className="size-4 fill-red-400 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
                        </button>

                        {/* Drag button */}
                        <button
                          className="aspect-square rotate-90 rounded-full border-t border-secondary bg-white p-2 opacity-0 transition-all delay-200 duration-300 ease-in-out group-hover:-translate-y-6 group-hover:rotate-0 group-hover:opacity-100"
                          onClick={() => console.log("Clicked")}
                        >
                          <FaHandPaper className="size-4 fill-neutral-500 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
                        </button>
                      </div>
                      <p>{index + 1}</p>
                    </div>
                  </motion.div>
                </li>
              </Reorder.Item>
            ))}
        </AnimatePresence>
      </Reorder.Group>
    </ul>
  );
};

export default Tasks;
