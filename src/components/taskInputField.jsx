import { TbSteam } from "react-icons/tb";

import "../i18n";
import { useTranslation } from "react-i18next";

const TaskInputField = ({ task, onTaskChange, onKeyPress }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-bgPrimary py-9">
      <div className="border-t border-secondary bg-bgPrimary">
        <div className="flex flex-row justify-between">
          <div className="flex flex-grow items-center gap-x-1 text-secondary">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInputField;
