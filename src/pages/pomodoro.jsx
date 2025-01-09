import Clock from "../components/clock.jsx";
import TaskPanel from "../components/taskPanel.jsx";

// Utilities
import { useTheme } from "../utils/ThemeContext.jsx";

function Pomodoro() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`theme-${theme} relative flex h-full flex-col bg-bgPrimary`}
      >
        <Clock />
        <TaskPanel />
      </div>
    </>
  );
}

export default Pomodoro;
