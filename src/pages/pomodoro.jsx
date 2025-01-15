import Clock from "../components/clock.jsx";
import PomodoroTasks from "../components/pomodoroTasks.jsx";

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
        <PomodoroTasks />
      </div>
    </>
  );
}

export default Pomodoro;
