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

  return (
    <>
      <div className={`theme-${theme} flex items-center justify-center`}>
        <div className="text-text w-full bg-primary py-32 text-center font-AlbertSans">
          <p className="font-RobotoCondensed text-xs font-light proportional-nums tracking-widest">
            {t("clockMessage")}
          </p>
          <h1 className="shadow-text text-7xl font-black tracking-wide text-shadow-sm sm:text-8xl md:text-9xl">
            25:00
          </h1>
        </div>
      </div>
    </>
  );
}

export default Clock;
