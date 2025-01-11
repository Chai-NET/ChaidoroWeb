import { TbSteam, TbArrowBigUpLinesFilled } from "react-icons/tb";

import "../i18n";
import { useTranslation } from "react-i18next";

const TaskInputField = ({ task, onTaskChange, handleAddTask, onKeyPress }) => {
  const { t } = useTranslation();
  return (
    <div className="my-3 w-full bg-bgPrimary py-9">
      {/* Task input field */}
      <div className="mx-3 rounded-lg border border-b-2 border-secondary45 bg-bgPrimary bg-white p-3 shadow-sm shadow-text">
        <div className="flex flex-row justify-between">
          <div className="flex flex-grow items-center gap-x-6 px-3 text-secondary">
            <TbSteam />
            <input
              onKeyDown={onKeyPress}
              type="text"
              maxLength={70}
              value={task}
              onChange={(e) => onTaskChange(e.target.value)}
              id="todos"
              placeholder={t("taskAddMsg")}
              autoComplete="off"
              className="peer w-full appearance-none border-opacity-90 bg-transparent py-1 font-Outfit tracking-widest text-primary outline-none placeholder:tracking-tight placeholder:text-secondary placeholder:opacity-90 focus:ring-0"
            />

            {/* Add button */}
            {/* <button className="bg-clockText rounded-lg p-2">
              <TbArrowBigUpLinesFilled className="fill-secondary45" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInputField;
