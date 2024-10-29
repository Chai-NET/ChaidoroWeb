import "./App.css";
import Empty from "./components/empty.jsx";
import Pomodoro from "./pages/pomodoro.jsx";
import Test from "./components/test.jsx";

function App() {
  return (
    <>
      <div className="selection:bg-chocolate selection:text-cream">
        <Pomodoro />
      </div>
    </>
  );
}

export default App;
