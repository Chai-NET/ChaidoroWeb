import { useTheme } from "../utils/ThemeContext.jsx";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function ThemeSettings() {
  const { t } = useTranslation();
  const { theme, themes, setTheme } = useTheme(); // Access theme from context

  return (
    <div className={`theme-${theme} h-dvh overflow-auto`}>
      <div className="font-Outfit text-primary">
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{t("themes")}</h1>
          <p className="">{t("themesDsc")}</p>
        </div>
        <div className="my-3 flex items-center justify-between gap-3">
          {/* {themes.map((n) => (
            <div
              key={n}
              onClick={() => setTheme(n)}
              className="h-80 w-64 cursor-pointer rounded-2xl border border-primary bg-secondary45 shadow shadow-blax/45"
            ></div>
          ))} */}
          <div
            className="group flex h-80 w-64 cursor-pointer items-end justify-start overflow-clip rounded-2xl border border-primary bg-gradient-to-tr from-white to-neutral-300 shadow shadow-blax/45"
            onClick={() => setTheme("white")}
          >
            <div className="aspect-square w-96 origin-center -translate-x-1/2 translate-y-1/3 rounded-full bg-red-700 blur-xl transition-all duration-700 group-hover:-translate-x-1/3 group-hover:blur-0" />
          </div>
          <div
            className="group flex h-80 w-64 cursor-pointer items-end justify-start overflow-clip rounded-2xl border border-primary bg-gradient-to-tr from-white to-neutral-300 shadow shadow-blax/45"
            onClick={() => setTheme("chai")}
          >
            <div className="aspect-square w-96 origin-center -translate-x-1/2 translate-y-1/3 rounded-full bg-stone-700 blur-xl transition-all duration-700 group-hover:-translate-x-1/3 group-hover:blur-0" />
          </div>
          <div
            className="group flex h-80 w-64 cursor-pointer items-end justify-start overflow-clip rounded-2xl border border-primary bg-gradient-to-tr from-white to-neutral-300 shadow shadow-blax/45"
            onClick={() => setTheme("black")}
          >
            <div className="aspect-square w-96 origin-center -translate-x-1/2 translate-y-1/3 rounded-full bg-blue-700 blur-xl transition-all duration-700 group-hover:-translate-x-1/3 group-hover:blur-0" />
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-6 h-[1px] w-full bg-primary" />
        <div className="my-3">
          <h1 className="text-2xl font-semibold">Current theme:</h1>
          <p>The three main colors of the theme:</p>
        </div>
        <div className="flex gap-3">
          <div className="size-9 rounded-full bg-accent"></div>
          <div className="size-9 rounded-full bg-primary"></div>
          <div className="size-9 rounded-full bg-secondary45"></div>
        </div>
        <div className="my-96 h-screen"></div>
      </div>
    </div>
  );
}
