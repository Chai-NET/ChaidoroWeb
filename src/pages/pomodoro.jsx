import Nav from "../components/navBar.jsx";
import Clock from "../components/clock.jsx";

function Pomodoro() {
  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto h-dvh overflow-clip bg-cream p-3 px-6 sm:w-5/6 md:w-3/5 2xl:w-1/2">
          <Nav />
          <Clock />
        </div>
      </div>
    </>
  );
}

export default Pomodoro;
