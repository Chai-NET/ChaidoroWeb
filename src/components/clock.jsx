import { useState } from "react";
import { useEffect } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";

// Icons
import { MdAddAlarm } from "react-icons/md";

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
        <div className="relative w-full rounded-xl border border-b-2 border-blax bg-accent py-24 text-center font-AlbertSans text-blax shadow-sm shadow-blax">
          <p className="font-RobotoCondensed text-xs font-light proportional-nums tracking-widest">
            {t("clockMessage")}
          </p>
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-7xl font-black shadow-text text-shadow-sm sm:text-8xl md:text-9xl">
              25
            </h1>
            <div className="h-1 w-6 rounded-full bg-blax" />

            <h1 className="text-7xl font-black shadow-text text-shadow-sm sm:text-8xl md:text-9xl">
              00
            </h1>
          </div>

          <div className="flex items-center justify-center gap-3 px-12 xsm:px-16 sm:px-24 md:px-52 xl:px-72">
            <div className="h-[1px] w-full bg-blax" />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              className="z-30 mt-3 aspect-square cursor-pointer rounded-full border border-b-2 border-blax bg-blax px-4 font-Outfit text-lg font-semibold uppercase text-white shadow-sm shadow-blax"
            >
              <MdAddAlarm className="size-7 fill-accent outline-1" />
            </motion.button>
            <div className="h-[1px] w-full bg-blax" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Clock;
