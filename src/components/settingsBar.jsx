import React, { useState } from "react";
import { GiTeapot, GiCoffeeCup } from "react-icons/gi";
import { TbSteam } from "react-icons/tb";

function SettingsPage() {
  const [activePage, setActivePage] = useState("Profile");

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  const navigationItems = [
    "Profile",
    "Timer",
    "Language",
    "Themes",
    "Notifications",
  ];

  const PageUnderDevelopment = () => {
    return (
      <div className="relative flex select-none flex-col items-center justify-center gap-3 py-12 text-center font-Outfit">
        <h1 className="text-xl font-light text-chocolate/45 md:text-2xl">
          Currently under development
        </h1>
        <p className="tracking-tight text-coffee/75">
          This Settings page is currently under development <br /> please be
          patient while I work on it.
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

  const renderContent = () => {
    switch (activePage) {
      case "Profile":
        return <PageUnderDevelopment />;
      case "Timer":
        return <PageUnderDevelopment />;
      case "Language":
        return <PageUnderDevelopment />;
      case "Themes":
        return <PageUnderDevelopment />;
      case "Notifications":
        return <PageUnderDevelopment />;
      default:
        return <PageUnderDevelopment />;
    }
  };

  return (
    <div className="flex h-full flex-col py-3 font-Outfit">
      <div className="h-9 w-full font-Outfit">
        <h3 className="text-3xl font-bold text-chocolate">Settings</h3>
      </div>
      <nav className="my-3 flex justify-between gap-x-3 border-b border-chocolate px-1 md:justify-start md:space-x-3 2xl:space-x-9">
        {navigationItems.map((item) => (
          <button
            key={item}
            onClick={() => setActivePage(item)}
            className={`rounded-md py-2 transition-all duration-300 ${
              activePage === item
                ? "font-bold tracking-wider text-chocolate"
                : "tracking-tight text-coffee"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="flex-grow px-1">{renderContent()}</div>
    </div>
  );
}

export default SettingsPage;
