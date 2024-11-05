import "../customCSS/noScroll.css"; //Custom CSS that removes Scroll bar of the element
// import CatCHDR from "../img/drawings/catCHDR.webp"; // Picture of cat in the taskPanel Nya ^~^
import { Reorder } from "framer-motion";

const TaskPanel = ({ todos, setTodos, handleRemoveTodo }) => {
  return (
    <div>
      <div className="border-xblack bg-xbg z-0 mx-auto max-h-[750px] w-[75%] overflow-auto rounded-t-3xl border-x-2 border-t-4 md:w-[50%] xl:w-[40%]">
        <div className="m-9">
          <div className="flex gap-1 p-3 font-poppins text-3xl font-bold">
            <h2>Task List</h2>
            <h2 className="text-accent text-sm font-semibold">
              {todos.length}
            </h2>
          </div>
          <ul className="scroll-auto text-start font-poppins">
            <Reorder.Group values={todos} onReorder={setTodos}>
              {todos.map((todo, index) => (
                <Reorder.Item value={todo} key={todo}>
                  <li key={index}>
                    <div className="flex flex-row justify-between gap-3 py-1 hover:cursor-grab active:cursor-grabbing">
                      <div className="peer flex flex-row">
                        {/* Circle
                        <div
                          class="mx-1 ml-4 h-5 w-5 rounded-md border-2 border-xblack hover:cursor-pointer hover:border-accent hover:bg-accent md:ml-6"
                          onClick={() => handleRemoveTodo(index)}
                        ></div> */}
                        {/* Not working Technique */}
                        <div class="flex items-center">
                          <input
                            type="checkbox"
                            class="peer hidden"
                            id="custom"
                          />
                          <label
                            for="custom"
                            class="before:border-accent peer-checked:before:bg-secondary peer-checked:before:text-accent relative flex h-6 rotate-45 cursor-pointer select-none pl-8 before:absolute before:left-0 before:flex before:h-6 before:w-6 before:items-center before:justify-center before:rounded-full before:rounded-tr-none before:border before:bg-transparent before:transition-[background-color] before:duration-300 before:ease-in before:content-[''] peer-checked:before:font-bold peer-checked:before:transition-[background-color] peer-checked:before:duration-300 peer-checked:before:ease-in peer-checked:before:content-['o']"
                          ></label>
                        </div>
                        {/* Task Name */}
                        <label className="whitespace-nowrap px-3 first-letter:uppercase hover:cursor-grab active:cursor-grabbing">
                          {todo}
                        </label>
                      </div>
                      {/* Line betweeen */}
                      <hr className="border-xblack my-3 w-full" />
                      {/* Index on the list */}
                      <div className="item-end flex justify-end peer-has-[:checked]:hidden">
                        {index + 1}
                      </div>
                    </div>
                  </li>
                </Reorder.Item>
              ))}
            </Reorder.Group>
            {/* A Block of empty space */}
            <div className="bg-xbg relative z-50 py-12">
              {/* <img
                src={CatCHDR}
                className="pointer-events-none absolute right-0 w-3/5"
                alt="A cute cat"
              /> */}
              {/* <p className="absolute bottom-0 left-0 font-semibold font-poppins"> (´｡• ω •｡`) 休憩してください...</p> */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TaskPanel;
