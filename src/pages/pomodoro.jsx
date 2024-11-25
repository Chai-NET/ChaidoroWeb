import Clock from "../components/clock.jsx";
import TaskBar from "../components/taskBar.jsx";

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
        <TaskBar />
      </div>
    </>
  );
}

export default Pomodoro;
