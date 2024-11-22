import LanguageSelector from "./languageSelector.jsx";

export default function AppSettings() {
  return (
    <>
      <div className="h-dvh overflow-auto pb-64 font-Outfit text-chocolate">
        {/* Clock Settings */}
        <div>
          <div className="my-3">
            <h1 className="text-2xl font-semibold">Clock</h1>
            <p className="">Period of focus / Time format </p>
          </div>
          {/* Time Period Settings */}
          <div className="mx-auto flex w-full items-center justify-between gap-3">
            <div className="flex h-32 flex-grow items-center justify-center rounded-2xl border-b border-blax bg-chocolate shadow-sm shadow-blax/45">
              <p className="text-shadow text-6xl font-black text-cream shadow-blax/75">
                25
              </p>
              <span className="text-shadow invisible absolute w-1 px-2 text-sm leading-none text-cream shadow-blax sm:visible sm:relative">
                Focus time
              </span>
            </div>
            <div className="flex h-32 flex-grow items-center justify-center rounded-2xl border-b border-chocolate bg-coffee shadow-sm shadow-blax/45">
              <p className="text-shadow text-6xl font-black text-cream shadow-blax/75">
                5
              </p>
              <span className="text-shadow invisible absolute w-1 px-2 text-sm leading-none text-cream shadow-blax sm:visible sm:relative">
                Short break
              </span>
            </div>
            <div className="flex h-32 flex-grow items-center justify-center rounded-2xl border-b border-chocolate bg-coffee/45 shadow-sm shadow-blax/45">
              <p className="text-shadow text-6xl font-black text-chocolate shadow-coffee/75">
                15
              </p>
              <span className="text-shadow invisible absolute w-1 px-2 text-sm leading-none text-chocolate shadow-coffee sm:visible sm:relative">
                Long break
              </span>
            </div>
          </div>
          <p className="mt-3 tracking-wide">
            * We highly encourage you to not change 25 focus / 5 break format.
            Due to feedback from people it seems like 25 minute work format is
            the best for most of the people.
          </p>
          {/* 12/24 Hour format settings */}
          {/* <h2>24 hour format</h2> */}
        </div>

        {/* Divider Line */}
        <div className="my-6 h-[1px] w-full bg-chocolate" />
        {/* Language Settings */}

        <div className="mb-3">
          <h1 className="text-2xl font-semibold">Languages</h1>
          <p className="">We currently have 3 different languages.</p>
        </div>
        <LanguageSelector />
        <p className="my-3 tracking-wide">
          ** Although I have made every effort to include as many translations
          as possible, there may still be errors. If you notice any
          inaccuracies, please do not hesitate to contact me via email. I would
          like to acknowledge my friends who contributed to the translations.
          Their names are listed on the information page of the website.
          <br /> <br />
          *** If you are interested in contributing to the translation of this
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
