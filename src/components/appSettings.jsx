import LanguageSelector from "./languageSelector.jsx";

export default function AppSettings() {
  return (
    <>
      <div className="h-dvh overflow-auto pb-64 font-Outfit text-chocolate">
        {/* Clock Settings Title: */}
        <div className="my-3">
          <h1 className="text-2xl font-semibold">Clock</h1>
          <p className="">Here will be the settings about Clock / Timer.</p>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row">
          <div className="flex items-center gap-1">
            <div className="flex h-32 w-32 items-center justify-center rounded-l-xl border-b-2 border-blax bg-chocolate shadow-sm shadow-coffee">
              <p className="text-6xl font-black text-cream">25</p>
            </div>
            <div className="h-32 w-12 rounded-none border-b-2 border-blax bg-coffee shadow-sm shadow-coffee" />
            <div className="flex h-32 w-32 items-center justify-center rounded-r-xl border-b-2 border-blax bg-coffee/75 shadow-sm shadow-coffee">
              <p className="text-6xl font-black text-chocolate">00</p>
            </div>
          </div>

          <div className="invisible absolute flex flex-col gap-3 md:visible md:relative">
            <div className="size-3 rounded-md border-chocolate bg-coffee shadow-sm shadow-coffee" />
            <div className="size-3 rounded-md border-chocolate bg-coffee shadow-sm shadow-coffee" />
          </div>
          <div className="invisible absolute h-32 w-fit rounded-xl border-b border-coffee bg-coffee/45 p-6 px-9 shadow-sm shadow-coffee md:visible md:relative">
            <p className="mx-auto text-justify text-xs tracking-wide">
              Typically, users can set the duration for work sessions (e.g., 25
              minutes) and short or long breaks (e.g., 5 and 15 minutes,
              respectively). Advanced settings, such as the ability to adjust
              the number of sessions before a long break or enable reminders and
              sound alerts. These settings enhance flexibility, helping users
              tailor the Pomodoro technique to your personal productivity needs.
            </p>
          </div>
        </div>

        <h1 className="my-3 text-2xl font-semibold">Language</h1>
        <LanguageSelector />
        <p className="my-3">
          * Although I have made every effort to include as many translations as
          possible, there may still be errors. If you notice any inaccuracies,
          please do not hesitate to contact me via email. I would like to
          acknowledge my friends who contributed to the translations. Their
          names are listed on the information page of the website.
          <br /> <br />
          ** If you are interested in contributing to the translation of this
          website, I would greatly appreciate your assistance. Your
          contributions will be credited in the project. Please feel free to
          reach out to me!
        </p>
        <h1 className="my-12 text-2xl font-semibold">Notifications</h1>
        <div className="size-32 bg-chocolate"></div>
        <h1 className="my-12 text-2xl font-semibold">Time format</h1>
        <div className="size-32 bg-chocolate"></div>
      </div>
    </>
  );
}
