import "../i18n";
import { useTranslation } from "react-i18next";

export default function ThemeSettings() {
  const { t } = useTranslation();
  return (
    <div className="h-dvh overflow-auto">
      <div className="font-Outfit text-chocolate">
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{t("themes")}</h1>
          <p className="">{t("themesDsc")}</p>
        </div>
        <div className="my-3 flex items-center justify-between gap-3">
          <div className="h-80 w-64 rounded-2xl border border-chocolate bg-coffee/75 shadow shadow-blax/45"></div>
          <div className="h-80 w-64 rounded-2xl border border-chocolate bg-coffee/75 shadow shadow-blax/45"></div>
          <div className="h-80 w-64 rounded-2xl border border-chocolate bg-coffee/75 shadow shadow-blax/45"></div>
        </div>

        {/* Divider Line */}
        <div className="my-6 h-[1px] w-full bg-chocolate" />
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{t("yourCustomTheme")}</h1>
          <p className="">{t("yourCustomThemeDsc")}</p>
        </div>
        <div className="flex gap-3">
          <div className="size-9 rounded-full bg-chocolate"></div>
          <div className="size-9 rounded-full bg-coffee"></div>
          <div className="size-9 rounded-full bg-coffee/50"></div>
        </div>
        <div className="my-96 h-screen"></div>
      </div>
    </div>
  );
}
