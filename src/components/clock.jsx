import "../i18n";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";

// Icons

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

  // Random rotation for styling
  const getRandomNumber = () => Math.floor(Math.random() * 361);

  return (
    <>
      <div className={`theme-${theme} z-30 flex items-center justify-center`}>
        <AnimatePresence>
          <div className="relative w-full overflow-clip rounded-xl border border-b-2 border-secondary bg-secondary45 py-9 text-center font-AlbertSans text-clockText shadow shadow-secondary">
            {/* Absolute styles */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
                rotate: getRandomNumber(),
                filter: "blur(500px)",
              }}
              animate={{
                scale: 0.95,
                opacity: 1,
                rotate: getRandomNumber(),
                filter: "blur(0px)",
                transition: {
                  duration: 3,
                },
              }}
              exit={{ scale: 0.7, opacity: 0, filter: "blur(10px)" }}
              className="relative z-0"
            >
              <div className="absolute z-0 aspect-square w-96 -translate-x-44 translate-y-32 rounded-full bg-accent opacity-85 blur-[100px]" />

              <div className="absolute right-0 top-0 z-0 aspect-square w-96 -translate-y-16 translate-x-40 rounded-full bg-accent opacity-85 blur-[100px]" />
            </motion.div>

            {/* Clock types */}
            <div className="z-20 flex items-center justify-center gap-3 font-Outfit text-lg font-light md:gap-9">
              <button className="z-20 cursor-pointer rounded-xl p-2 px-5 text-center tracking-normal transition-all duration-300 hover:font-bold hover:tracking-widest hover:text-accent md:mx-3">
                Focus
              </button>
              <div className="z-20 h-3 w-0.5 rounded-full bg-text opacity-75" />
              <button className="z-20 cursor-pointer rounded-xl p-2 px-5 text-center tracking-normal transition-all duration-300 hover:font-bold hover:tracking-widest hover:text-accent md:mx-3">
                Break
              </button>
            </div>

            {/* Clock */}
            <div className="z-20 flex items-center justify-center gap-3">
              <h1 className="z-20 text-7xl font-black shadow-text text-shadow-sm sm:text-8xl md:text-9xl">
                25:00
              </h1>
            </div>

            {/* Start button */}
            <div className="z-20 flex items-center justify-center gap-3 px-12 xsm:px-16 sm:px-24 md:px-52 xl:px-72">
              <button className="z-20 mt-6 rounded-xl border border-b-4 border-clockText bg-clockText p-2 px-9 font-Outfit text-base font-semibold uppercase text-secondary45">
                Start
              </button>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default Clock;
