import { useState } from "react";
import { useEffect } from "react";

function Clock() {
  // const today = new Date();
  // const month = today.getMonth();
  // const year = today.getFullYear();
  // const date = today.getDate();
  // const currentDate = month + "/" + date + "/" + year;
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
        <div className="w-full bg-chocolate py-32 text-center font-Outfit text-cream">
          {/* Will show current time dash approximate finish time:
          Example:
          12:52 AM - 01:17 AM */}
          <p className="font-RobotoCondensed font-light tracking-widest">
            {timeStein} © ChaiNET
          </p>
          <h1 className="text-5xl font-black tracking-wide md:text-8xl">
            25:00
          </h1>
        </div>
      </div>
    </>
  );
}

export default Clock;
