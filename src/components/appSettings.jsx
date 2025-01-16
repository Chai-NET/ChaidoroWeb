// AppSettings.jsx
import React, { useState, useEffect } from "react";
import LanguageSelector from "./languageSelector.jsx";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useTheme } from "../utils/ThemeContext.jsx";

export default function AppSettings() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  // Load settings from local storage
  useEffect(() => {
    const savedSettings = localStorage.getItem("pomodoroSettings");
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setFocusTime(parsedSettings.focusTime);
      setBreakTime(parsedSettings.breakTime);
    }
  }, []);

  const saveSettings = () => {
    const newSettings = { focusTime, breakTime };
    localStorage.setItem("pomodoroSettings", JSON.stringify(newSettings));
    // alert(t("Settings saved!"));
  };

  return (
    <div
      className={`theme-${theme} h-dvh overflow-auto pb-64 font-Outfit text-primary`}
    >
      {/* Clock Settings */}
      <div>
        <div>
          <div className="my-3">
            <h1 className="text-2xl font-semibold">{t("clock")}</h1>
            <p className="">{t("clockDsc")} </p>
          </div>
          {/* Time Period Settings */}
          <div className="mx-auto flex w-full items-center justify-between gap-3">
            <div className="flex h-32 flex-grow items-center justify-center rounded-2xl border-b border-blax bg-accent p-3 shadow-sm shadow-blax/45">
              <input
                id="focusTime"
                type="number"
                min="15"
                max="55"
                value={focusTime}
                onChange={(e) => setFocusTime(Number(e.target.value))}
                className="w-28 border-transparent bg-transparent text-6xl font-black text-bgPrimary shadow-blax/75 text-shadow focus:border-transparent focus:ring-0"
              />
              <span className="invisible absolute w-1 px-2 text-xs leading-none text-bgPrimary shadow-blax text-shadow sm:visible sm:relative">
                {t("focusTime")}
              </span>
            </div>
            <div className="flex h-32 flex-grow items-center justify-center rounded-2xl border-b border-primary bg-secondary p-3 shadow-sm shadow-blax/45">
              <input
                id="breakTime"
                type="number"
                min="5"
                max="30"
                value={breakTime}
                onChange={(e) => setBreakTime(Number(e.target.value))}
                className="w-28 border-transparent bg-transparent text-6xl font-black text-bgPrimary shadow-blax/75 text-shadow focus:border-transparent focus:ring-0"
              />
              <span className="invisible absolute w-1 px-2 text-xs leading-none text-bgPrimary shadow-blax text-shadow sm:visible sm:relative">
                {t("shortBreak")}
              </span>
            </div>
            {/* <div className="flex h-32 flex-grow items-center justify-center rounded-2xl border-b border-primary bg-secondary45 p-3 shadow-sm shadow-blax/45">
              <p className="text-6xl font-black text-primary shadow-secondary45 text-shadow">
                15
              </p>
              <span className="invisible absolute w-1 px-2 text-xs leading-none text-primary shadow-secondary text-shadow sm:visible sm:relative">
                {t("longBreak")}
              </span>
            </div> */}
          </div>
        </div>
        <p className="mt-3 tracking-wide">{t("clockMsg")}</p>
        {/* 12/24 Hour format settings */}

        <button
          onClick={saveSettings}
          className="mt-4 rounded-lg bg-accent px-4 py-2 font-bold text-bgPrimary"
        >
          {t("Save Settings")}
        </button>
      </div>

      {/* Divider Line */}
      <div className="my-6 h-[1px] w-full bg-primary" />

      {/* Language Settings */}

      <div className="mb-3">
        <h1 className="text-2xl font-semibold">{t("languages")}</h1>
        <p className="">{t("languagesDsc")}</p>
      </div>
      <LanguageSelector />
      <p className="my-3 tracking-wide">
        {t("languagesMsgOne")}
        <br /> <br />
        {t("languagesMsgTwo")}
      </p>
      {/* Other Settings */}
      {/* <h1 className="my-12 text-2xl font-semibold">Notifications</h1>
        <div className="size-32 bg-primary"></div>
        <h1 className="my-12 text-2xl font-semibold">Time format</h1>
        <div className="size-32 bg-primary"></div> */}
    </div>
  );
}
