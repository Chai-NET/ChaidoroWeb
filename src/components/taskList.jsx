import { FaCheck } from "react-icons/fa";
import { AnimatePresence, motion, Reorder } from "motion/react";

const TaskList = ({ todos, onReorder, onRemove }) => {
  return (
    <ul className="my-6 pb-12 text-start font-poppins">
      <Reorder.Group values={todos} onReorder={onReorder}>
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
                  className="m-3 my-5 flex flex-row items-center justify-between gap-3 rounded-lg border-blax bg-white p-3 pr-6 shadow-sm shadow-neutral-500 hover:cursor-grab active:cursor-grabbing"
                >
                  <div className="flex items-center gap-3">
                    <button
                      className="group peer aspect-square rounded-full border border-emerald-600 border-secondary p-1 transition-all duration-300 ease-in-out hover:bg-emerald-600"
                      onClick={() => onRemove(index)}
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
  );
};

export default TaskList;
