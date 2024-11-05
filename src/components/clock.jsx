import { useState } from "react";
import { useEffect } from "react";

function Clock() {
  const today = new Date();
  const year = today.getFullYear();
  const [timeStein, setTimeStein] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeStein(new Date().getTime());
      console.log("Time:", timeStein);
    }, 1);

    // Clean up on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="mt-3 flex items-center justify-center">
        <div className="w-full bg-chocolate py-32 text-center font-AlbertSans text-cream">
          <p className="font-RobotoCondensed text-xs font-light proportional-nums tracking-widest">
            {timeStein}.01 | {year} © ChaiNET
          </p>
          <h1 className="text-7xl font-black tracking-wide sm:text-8xl md:text-9xl">
            25:00
          </h1>
        </div>
      </div>
    </>
  );
}

export default Clock;
