import LanguageSelector from "./languageSelector.jsx";

export default function AppSettings() {
  return (
    <>
      <div className="h-dvh overflow-auto pb-64 font-Outfit text-chocolate">
        {/* Clock Settings */}
        <div>
          <div className="my-3">
            <h1 className="text-2xl font-semibold">Clock</h1>
            <p className="">Here will be the settings about Clock / Timer.</p>
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <div className="mx-auto flex w-2/3 items-center justify-between">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl border-b border-coffee bg-chocolate shadow-sm shadow-blax/45">
                <p className="text-6xl font-black text-cream">25</p>
              </div>
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl border-b border-chocolate bg-coffee shadow-sm shadow-blax/45">
                <p className="text-6xl font-black text-chocolate">5</p>
              </div>
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl border-b border-chocolate bg-coffee shadow-sm shadow-blax/45">
                <p className="text-6xl font-black text-chocolate">15</p>
              </div>
            </div>
          </div>
          <h2>24 hour format</h2>
        </div>

        {/* Divider Line */}
        <div className="my-6 h-[1px] w-full bg-chocolate" />
        {/* Language Settings */}

        <div className="mb-3">
          <h1 className="text-2xl font-semibold">Languages</h1>
          <p className="">We currently have 3 different languages.</p>
        </div>
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
        {/* Other Settings */}
        {/* <h1 className="my-12 text-2xl font-semibold">Notifications</h1>
        <div className="size-32 bg-chocolate"></div>
        <h1 className="my-12 text-2xl font-semibold">Time format</h1>
        <div className="size-32 bg-chocolate"></div> */}
      </div>
    </>
  );
}
