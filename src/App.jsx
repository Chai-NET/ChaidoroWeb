import React from "react";
import "./App.css";
import {
  IoSettings,
  IoAlarm,
  IoApps,
  IoLanguage,
  IoBarChart,
  IoAlbums,
} from "react-icons/io5";
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
  initial: { opacity: 0.3, x: -25 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0.3, x: 25 },
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
              transition={{ duration: 0.5 }}
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
    <div className="relative flex justify-between border-b border-chocolate font-Outfit text-xl text-chocolate">
      <a
        href="/"
        className="group flex w-1/2 cursor-pointer items-center gap-1 pr-2 transition-all duration-300 hover:gap-2"
      >
        <div className="block aspect-square size-4 rounded-full bg-coffee"></div>
        <div className="block aspect-square size-4 rounded-full bg-chocolate"></div>
        <div className="block aspect-square size-4 rounded-full bg-blax"></div>
        <h1 className="font-Outfit font-semibold tracking-tighter">Chaidoro</h1>
        <p className="-mr-96 line-clamp-1 text-nowrap px-1 text-xs tracking-widest text-coffee underline-offset-4 opacity-0 blur-sm transition-all duration-1000 ease-in-out hover:text-blax hover:underline group-hover:mr-0 group-hover:tracking-normal group-hover:text-chocolate group-hover:opacity-100 group-hover:blur-0">
          v0.01 / Beta
        </p>
      </a>

      {/* Navigation: */}
      <div className="flex items-center justify-end gap-3 text-base font-semibold capitalize sm:w-1/2">
        <a
          className="underline-offset-4 transition-all duration-300 hover:text-blax hover:underline"
          href="/"
        >
          <IoAlarm className="size-5 text-chocolate transition-all duration-500 hover:rotate-45" />
        </a>
        <a
          className="underline-offset-4 transition-all duration-300 hover:text-blax hover:underline"
          href="/tasks"
        >
          <IoAlbums className="size-5 text-chocolate transition-all duration-500 hover:rotate-45" />
        </a>
        <a
          className="transition-all duration-300 hover:text-blax hover:underline"
          href="/settings"
        >
          <IoSettings className="size-5 text-chocolate transition-all duration-500 hover:rotate-45" />
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
