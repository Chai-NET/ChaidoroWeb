import { useTheme } from "../utils/ThemeContext.jsx";
import "../i18n";
import { useTranslation } from "react-i18next";

export default function ThemeSettings() {
  const { t } = useTranslation();
  const { theme, setTheme, themes } = useTheme(); // Access theme from context

  return (
    <div className={`theme-${theme} h-dvh overflow-auto`}>
      <div className="font-Outfit text-primary">
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{t("themes")}</h1>
          <p className="">{t("themesDsc")}</p>
        </div>
        <div className="my-3 flex items-center justify-between gap-3">
          {themes.map((n) => (
            <div
              key={n}
              onClick={() => setTheme(n)}
              className="h-80 w-64 cursor-pointer rounded-2xl border border-primary bg-secondary45 shadow shadow-blax/45"
            ></div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="my-6 h-[1px] w-full bg-primary" />
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{t("yourCustomTheme")}</h1>
          <p className="">{t("yourCustomThemeDsc")}</p>
        </div>
        <div className="flex gap-3">
          <div className="size-9 rounded-full bg-primary"></div>
          <div className="size-9 rounded-full bg-secondary"></div>
          <div className="size-9 rounded-full bg-secondary45"></div>
        </div>
        <div className="my-96 h-screen"></div>
      </div>
    </div>
  );
}
