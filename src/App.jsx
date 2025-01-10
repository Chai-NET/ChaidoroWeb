import { React, useEffect, useState } from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import "./App.css";
import { AnimatePresence, motion } from "motion/react";

// Icons
import { GiTeapot } from "react-icons/gi";
import { BsGearWideConnected } from "react-icons/bs";
import { FaRegClock, FaListOl } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";

// Utilities
import { ThemeProvider, useTheme } from "./utils/ThemeContext.jsx";

// Pages
import Error404 from "./pages/error404.jsx";
import Pomodoro from "./pages/pomodoro.jsx";
import Tasks from "./pages/tasks.jsx";
import Settings from "./pages/settings.jsx";

// Libraries
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const pageTransition = {
  initial: { opacity: 0, y: -55 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 55 },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Pomodoro / Home */}
        <Route
          path="/"
          element={
            <motion.div
              className="h-full"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              transition={{ duration: 0.3 }}
            >
              <Pomodoro />
            </motion.div>
          }
        />
        {/* Tasks */}
        <Route
          path="/tasks"
          element={
            <motion.div
              className="h-full"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              transition={{ duration: 0.5 }}
            >
              <Tasks />
            </motion.div>
          }
        />
        {/* Settings */}
        <Route
          path="/settings"
          element={
            <motion.div
              className="h-full"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              transition={{ duration: 0.5 }}
            >
              <Settings />
            </motion.div>
          }
        />
        {/* Fallback 404 route */}
        <Route
          path="*"
          element={
            <motion.div
              className="h-full"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
              transition={{ duration: 0.5 }}
            >
              <Error404 />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  return (
    <div
      className={`theme-${theme} relative z-40 flex items-center justify-between border-primary bg-bgPrimary font-Outfit`}
    >
      {/* Main Chaidoro Logo */}
      <a
        href="/"
        className="group flex w-1/2 cursor-pointer items-center gap-0 transition-all duration-300 hover:gap-2"
      >
        {/* Three Chainiks */}
        {/* <GiTeapot className="block aspect-square size-8 rounded-full text-accent opacity-35 transition-all delay-0 duration-300 group-hover:rotate-[25deg]" />
        <GiTeapot className="block aspect-square size-8 rounded-full text-accent opacity-55 transition-all delay-200 duration-300 group-hover:rotate-[25deg]" />
        <GiTeapot className="block aspect-square size-8 rounded-full text-accent transition-all delay-500 duration-300 group-hover:rotate-[25deg]" /> */}

        {/* Pomodoro */}
        <div className="size-5 rounded-b-full border border-b-2 border-blax bg-accent transition-all duration-500 ease-in-out" />

        <div className="invisible absolute flex justify-between pl-1 xsm:visible xsm:relative">
          <h1 className="font-Outfit text-2xl font-semibold tracking-tight text-primary">
            {t("chaidoro")}
          </h1>
        </div>
      </a>

      {/* Navigation: */}

      <div
        className={`theme-${theme} text-md flex items-center justify-end space-x-3 rounded-md font-medium capitalize`}
      >
        <a className="flex items-center gap-2" href="/tasks">
          <FaCheckDouble className="size-4 fill-primary transition-all duration-500" />
          <p className="invisible absolute text-primary md:visible md:relative">
            {t("todo")}
          </p>
        </a>
        <div className="h-4 w-[1px] bg-primary" />
        <a className="group flex items-center gap-2" href="/settings">
          <BsGearWideConnected className="size-4 fill-primary transition-all duration-500 group-hover:animate-spin" />
          <p className="invisible absolute text-primary md:visible md:relative">
            {t("settings")}
          </p>
        </a>
      </div>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    console.log("Saved language: ", savedLanguage);
    return (
      (savedLanguage && JSON.parse(savedLanguage)) || {
        name: "English",
        code: "en",
        flag: "🇬🇧",
      }
    );
  });

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.code);
    console.log(selectedLanguage.code);
    localStorage.setItem("selectedLanguage", JSON.stringify(selectedLanguage));
  }, [selectedLanguage, i18n]);

  console.log("Current language:", i18n.language);
  return (
    <Router>
      <div
        className={`theme-${theme} bg-bgPrimary selection:bg-primary selection:text-bgPrimary`}
      >
        <div className="relative mx-auto h-dvh overflow-clip p-3 px-6 sm:w-5/6 md:w-4/5 lg:w-3/5 2xl:w-1/2">
          <Navbar />
          <div className="mt-3 h-full">
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
