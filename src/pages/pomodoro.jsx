import Clock from "../components/clock.jsx";
import TaskBar from "../components/taskBar.jsx";

function Pomodoro() {
  return (
    <>
      <div className="bg-bgPrimary relative flex h-full flex-col">
        <Clock />
        <TaskBar />
      </div>
    </>
  );
}

export default Pomodoro;
