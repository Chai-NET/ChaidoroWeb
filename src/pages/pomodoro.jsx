import Nav from "../components/navBar.jsx";
import Clock from "../components/clock.jsx";
import TaskList from "../components/taskList.jsx";
import TaskBar from "../components/taskBar.jsx";

function Pomodoro() {
  return (
    <>
      <div className="relative flex h-full flex-col bg-cream">
        <Clock />
        <TaskBar />
      </div>
    </>
  );
}

export default Pomodoro;
