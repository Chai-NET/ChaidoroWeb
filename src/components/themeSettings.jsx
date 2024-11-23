import "../i18n";
import { useTranslation } from "react-i18next";

export default function ThemeSettings() {
  const { t } = useTranslation();
  return (
    <div className="h-dvh overflow-auto">
      <div className="text-primary font-Outfit">
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{t("themes")}</h1>
          <p className="">{t("themesDsc")}</p>
        </div>
        <div className="my-3 flex items-center justify-between gap-3">
          <div className="border-primary bg-secondary/75 h-80 w-64 rounded-2xl border shadow shadow-blax/45"></div>
          <div className="border-primary bg-secondary/75 h-80 w-64 rounded-2xl border shadow shadow-blax/45"></div>
          <div className="border-primary bg-secondary/75 h-80 w-64 rounded-2xl border shadow shadow-blax/45"></div>
        </div>

        {/* Divider Line */}
        <div className="bg-primary my-6 h-[1px] w-full" />
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{t("yourCustomTheme")}</h1>
          <p className="">{t("yourCustomThemeDsc")}</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-primary size-9 rounded-full"></div>
          <div className="bg-secondary size-9 rounded-full"></div>
          <div className="bg-secondary/50 size-9 rounded-full"></div>
        </div>
        <div className="my-96 h-screen"></div>
      </div>
    </div>
  );
}
