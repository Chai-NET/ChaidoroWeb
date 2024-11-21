import React from "react";
import { GiTeapot } from "react-icons/gi";

import "./App.css";
import {
  IoSettings,
  IoAlarm,
  IoApps,
  IoLanguage,
  IoBarChart,
  IoAlbums,
} from "react-icons/io5";
import { FaClock, FaListOl, FaGear } from "react-icons/fa6";
import { CiAlarmOn, CiBoxList, CiSettings } from "react-icons/ci";

import Error404 from "./pages/error404.jsx";
import Pomodoro from "./pages/pomodoro.jsx";
import Tasks from "./pages/tasks.jsx";
import Settings from "./pages/settings.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 1, y: -35 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 35 },
};
const AnimatedRoutes = () => {
  const location = useLocation();

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
  return (
    <div className="relative z-40 flex justify-between border-b border-chocolate bg-cream font-Outfit text-chocolate">
      {/* Main Chaidoro Logo */}
      <a
        href="/"
        className="group mb-1 flex w-1/2 cursor-pointer items-center gap-0 transition-all duration-300 hover:gap-2"
      >
        <GiTeapot className="block aspect-square size-6 rounded-full text-coffee/50 transition-all delay-0 duration-300 group-hover:rotate-[25deg]" />
        <GiTeapot className="block aspect-square size-6 rounded-full text-coffee transition-all delay-200 duration-300 group-hover:rotate-[25deg]" />
        <GiTeapot className="block aspect-square size-6 rounded-full text-chocolate transition-all delay-500 duration-300 group-hover:rotate-[25deg]" />
        <div className="xsm:visible xsm:relative invisible absolute flex justify-between pl-1">
          <h1 className="font-Outfit text-xl font-semibold tracking-tight">
            Chaidoro
          </h1>
        </div>
      </a>

      {/* Navigation: */}
      <div className="flex items-center justify-end gap-5 text-base font-semibold capitalize sm:w-1/2">
        <a
          className="underline-offset-4 transition-all duration-300 hover:text-blax"
          href="/"
        >
          <FaClock className="size-4 text-chocolate transition-all duration-500 hover:animate-spin-slow" />
        </a>
        <a
          className="underline-offset-4 transition-all duration-300 hover:text-blax"
          href="/tasks"
        >
          <FaListOl className="size-4 text-chocolate transition-all duration-500" />
        </a>
        <a
          className="transition-all duration-300 hover:text-blax hover:underline"
          href="/settings"
        >
          <FaGear className="size-4 text-chocolate transition-all duration-500 hover:animate-spin" />
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-cream selection:bg-chocolate selection:text-cream">
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
