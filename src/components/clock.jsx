// Clock.jsx
import React, { useState, useEffect } from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "../utils/ThemeContext.jsx";

function Clock() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const [time, setTime] = useState(1500); // Default 25 minutes
  const [isFocusMode, setIsFocusMode] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [settings, setSettings] = useState({ focusTime: 25, breakTime: 5 });

  // Load settings from local storage
  useEffect(() => {
    const savedSettings = localStorage.getItem("pomodoroSettings");
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      setTime(parsedSettings.focusTime * 60);
    }
  }, []);

  // Timer logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            handleTimerEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleTimerEnd = () => {
    alert(isFocusMode ? t("Focus time is up!") : t("Break time is up!"));
    setIsFocusMode(!isFocusMode);
    setTime((isFocusMode ? settings.breakTime : settings.focusTime) * 60);
    setIsRunning(false);
  };

  const handleStartPause = () => setIsRunning(!isRunning);

  const handleSkip = () => {
    setIsRunning(false);
    setTime(settings.focusTime * 60);
    setIsFocusMode(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className={`theme-${theme} z-30 flex items-center justify-center`}>
      <AnimatePresence>
        <div className="relative w-full overflow-clip rounded-xl border border-b-2 border-secondary bg-secondary45 py-9 text-center font-AlbertSans text-clockText shadow shadow-secondary">
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              rotate: Math.random() * 360,
              filter: "blur(500px)",
            }}
            animate={{
              scale: 0.95,
              opacity: 1,
              rotate: Math.random() * 360,
              filter: "blur(0px)",
              transition: { duration: 3 },
            }}
            exit={{ scale: 0.7, opacity: 0, filter: "blur(10px)" }}
            className="relative z-0"
          >
            <div className="absolute z-0 aspect-square w-96 -translate-x-44 translate-y-32 rounded-full bg-accent opacity-85 blur-[100px]" />

            <div className="absolute right-0 top-0 z-0 aspect-square w-96 -translate-y-16 translate-x-40 rounded-full bg-accent opacity-85 blur-[100px]" />
          </motion.div>

          <div className="z-20 flex items-center justify-center gap-3 font-Outfit text-lg font-light md:gap-9">
            <button className="z-20 cursor-pointer rounded-xl p-2 px-5 text-center">
              {isFocusMode ? t("Focus") : t("Break")}
            </button>
          </div>

          <div className="z-20 flex items-center justify-center gap-3">
            <h1 className="z-20 text-7xl font-black sm:text-8xl md:text-9xl">
              {formatTime(time)}
            </h1>
          </div>

          <div className="z-20 flex items-center justify-center gap-3 px-12 xsm:px-16 sm:px-24 md:px-52 xl:px-72">
            <button
              className="z-20 mt-6 rounded-xl border border-b-4 border-clockText bg-clockText p-2 px-9 font-Outfit text-base font-semibold uppercase text-secondary45"
              onClick={handleStartPause}
            >
              {isRunning ? t("Pause") : t("Start")}
            </button>
            {isRunning ? (
              <button
                className="z-20 mt-6 rounded-xl border border-b-4 border-clockText bg-clockText p-2 px-9 font-Outfit text-base font-semibold uppercase text-secondary45"
                onClick={handleSkip}
              >
                {t("Reset")}
              </button>
            ) : (
              <div className="absolute"></div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Clock;
