import { div } from "framer-motion/client";
import React, { useState } from "react";
import { GiTeapot, GiCoffeeCup } from "react-icons/gi";
import { TbSteam } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import AppSettings from "./appSettings.jsx";
import ThemeSettings from "./themeSettings.jsx";

function SettingsPage() {
  const [activePage, setActivePage] = useState("Profile");

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  // Profile settings also will be on final version
  const navigationItems = ["Application", "Themes"];

  const PageUnderDevelopment = () => {
    return (
      <div className="relative flex select-none flex-col items-center justify-center gap-3 py-12 text-center font-Outfit">
        <h1 className="text-xl font-light text-chocolate/45 md:text-2xl">
          Currently under development
        </h1>
        <p className="tracking-tight text-coffee/75">
          The <span className="lowercase">{activePage}</span> page is currently
          under development <br /> please be patient while I work on it.
          <br />
          {currentDate}.01 | © ChaiNET <br />
        </p>
        <div className="flex select-none items-center text-5xl font-black tracking-wide text-coffee/15 md:text-7xl">
          <GiTeapot />
          <TbSteam size={35} className="text-chocolate/30" />
          <div className="scale-x-[-1]">
            <GiTeapot />
          </div>
        </div>
      </div>
    );
  };

  const PageEndMessage = () => {
    return (
      <div className="flex h-96 w-full items-center justify-between gap-3 text-chocolate">
        <div className="font-light tracking-wide">
          <h1>Developed under the order of SRC.</h1>
          <h2>All rights belong to SRC and ChaiNET</h2>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activePage) {
      case "Application":
        return <AppSettings />;
      case "Themes":
        return <ThemeSettings />;
      default:
        return <AppSettings />;
    }
  };

  return (
    <div className="flex h-full flex-col justify-between font-Outfit">
      <div className="my-1 mt-3 h-9 w-full font-Outfit">
        <h3 className="text-3xl font-bold text-chocolate">Settings</h3>
      </div>
      <nav className="flex w-full gap-x-6 border-b border-chocolate px-1">
        {/* Left-aligned group of navigation buttons */}
        <div className="flex flex-grow space-x-3 xsm:space-x-6 xl:space-x-6 2xl:space-x-9">
          {navigationItems.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`py-2 text-sm transition-all duration-300 hover:text-blax lg:text-base ${
                activePage === item
                  ? "font-black tracking-wider text-chocolate"
                  : "tracking-tight text-coffee"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right-aligned button */}
        <div className="invisible absolute flex items-center justify-center space-x-3 text-coffee md:visible md:relative">
          <div className="flex items-center space-x-1 bg-chocolate p-1 px-3 text-sm font-semibold">
            <FaWifi />
            <p>
              Network <span className="font-light tracking-wider">Version</span>
            </p>
          </div>
        </div>
      </nav>
      <div className="flex-grow px-1">{renderContent()}</div>
    </div>
  );
}

export default SettingsPage;
