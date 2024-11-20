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
        className="group mb-1 flex w-1/2 cursor-pointer items-center gap-1 text-2xl transition-all duration-300 hover:gap-3"
      >
        <div className="flex justify-between pr-1">
          <h1 className="font-Outfit font-semibold tracking-tight">chaidoro</h1>
        </div>
        <div className="block aspect-square size-5 rounded-full text-coffee transition-all delay-100 duration-300 group-hover:rotate-12">
          <GiTeapot />
        </div>
        <div className="block aspect-square size-5 rounded-full text-chocolate transition-all delay-200 duration-300 group-hover:rotate-12">
          <GiTeapot />
        </div>
        <div className="block aspect-square size-5 rounded-full text-blax transition-all delay-300 duration-300 group-hover:rotate-12">
          <GiTeapot />
        </div>
      </a>

      {/* Navigation: */}
      <div className="flex items-center justify-end gap-3 text-base font-semibold capitalize sm:w-1/2">
        <a
          className="underline-offset-4 transition-all duration-300 hover:text-blax hover:underline"
          href="/"
        >
          <IoAlarm className="size-5 text-chocolate transition-all duration-500" />
        </a>
        <a
          className="underline-offset-4 transition-all duration-300 hover:text-blax hover:underline"
          href="/tasks"
        >
          <IoAlbums className="size-5 text-chocolate transition-all duration-500" />
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
