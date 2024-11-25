import { useState } from "react";
import { useEffect } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";

// Utilities
import { useTheme } from "../utils/ThemeContext.jsx";

function Clock() {
  const { theme } = useTheme();

  const { t } = useTranslation();
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;
  // const [timeStein, setTimeStein] = useState();

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTimeStein(new Date().getTime());
  //     console.log("Time:", timeStein);
  //   }, 1);

  //   // Clean up on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <>
      <div className={`theme-${theme} flex items-center justify-center`}>
        <div className="w-full bg-primary py-32 text-center font-AlbertSans text-bgPrimary">
          <p className="font-RobotoCondensed text-xs font-light proportional-nums tracking-widest">
            {t("clockMessage")}
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
