import { CiSettings, CiAlarmOn, CiBoxList, CiStickyNote } from "react-icons/ci";
import {
  IoSettings,
  IoAlarm,
  IoApps,
  IoLanguage,
  IoBarChart,
} from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="relative flex justify-between border-b border-chocolate font-Outfit text-xl text-chocolate">
        <div className="group flex w-1/2 items-center gap-1 pr-2 transition-all duration-300 hover:gap-2">
          <div className="block aspect-square size-4 rounded-full bg-coffee"></div>
          <div className="block aspect-square size-4 rounded-full bg-chocolate"></div>
          <div className="block aspect-square size-4 rounded-full bg-blax"></div>
          <h1 className="font-Outfit font-semibold tracking-tighter">
            Chaidoro
          </h1>
          {/* <p className="text-xs tracking-wide">v0.1.0</p> */}
          <p className="-mr-96 line-clamp-1 text-nowrap px-1 text-xs tracking-widest text-coffee underline-offset-4 opacity-0 blur-sm transition-all duration-1000 ease-in-out hover:text-blax hover:underline group-hover:mr-0 group-hover:tracking-normal group-hover:text-chocolate group-hover:opacity-100 group-hover:blur-0">
            Open source / local pomodoro client.
          </p>
          {/* <p className="-mr-32 px-1 text-base tracking-widest text-coffee underline-offset-4 opacity-0 blur-sm transition-all delay-100 duration-1000 ease-in-out hover:text-blax hover:underline group-hover:mr-0 group-hover:tracking-tight group-hover:text-chocolate group-hover:opacity-100 group-hover:blur-0">
            statistics
          </p> */}
        </div>

        {/* Navigation: */}
        <div className="flex items-center justify-end gap-3 text-base font-semibold capitalize sm:w-1/2">
          <a
            className="underline-offset-4 transition-all duration-300 hover:text-blax hover:underline"
            href="#"
          >
            <IoAlarm className="size-5 text-chocolate transition-all duration-500 hover:rotate-45" />
          </a>
          <a
            className="transition-all duration-300 hover:text-blax hover:underline"
            href="#"
          >
            <IoSettings className="size-5 text-chocolate transition-all duration-500 hover:rotate-45" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
