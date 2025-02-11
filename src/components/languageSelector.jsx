import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import "../i18n";
import { useTranslation } from "react-i18next";
import flagLT from "../assets/flags/lt.svg";
import flagPL from "../assets/flags/pl.svg";
import flagCN from "../assets/flags/cn.svg";
import flagEN from "../assets/flags/gb.svg";

export default function SearchableDropdown() {
  const { i18n } = useTranslation();

  const languages = [
    { name: "English", originName: "English", code: "en", flag: flagEN },
    { name: "Lithuanian", originName: "Lietuvių", code: "lt", flag: flagLT },
    { name: "Polish", originName: "Polski", code: "pl", flag: flagPL },
    { name: "Chinese", originName: "中国人", code: "zh", flag: flagCN },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    return (
      (savedLanguage && JSON.parse(savedLanguage)) || {
        name: "English",
        originName: "English",
        code: "en",
        flag: flagEN,
      }
    );
  });

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.code);
    console.log(selectedLanguage.code);
    localStorage.setItem("selectedLanguage", JSON.stringify(selectedLanguage));
  }, [selectedLanguage, i18n]);

  const filteredLanguages = languages.filter(
    (lang) =>
      lang.name.toLowerCase().includes(search.toLowerCase()) ||
      lang.originName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative inline-block w-full text-primary">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`z-20 flex w-full items-center justify-between border-secondary bg-secondary45 px-6 py-3 text-left text-primary shadow-sm outline-none transition-all duration-500 hover:border-dashed hover:tracking-widest ${
          isOpen ? "rounded-t-md border-x border-t" : "rounded-md border"
        }`}
      >
        <span className="flex items-center">
          <img
            src={selectedLanguage.flag}
            className="w-6 rounded-md border border-blax"
            alt=""
          />
          <div className="mx-3 h-3 w-[1px] bg-primary"></div>
          {selectedLanguage.originName}
        </span>
        <IoChevronDown
          className={`ml-2 h-5 w-5 transition-transform duration-700 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute z-20 w-full overflow-clip rounded-b-xl border-x border-secondary bg-bgPrimary shadow-lg transition-all delay-500 duration-300 ${
            isOpen ? "opacity-100 delay-300" : "opacity-100 delay-300"
          } `}
        >
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-b border-dashed border-secondary border-opacity-45 bg-bgPrimary px-6 py-3 outline-none placeholder:text-text focus:ring-0"
          />

          {/* Language List */}
          <ul className="max-h-48 overflow-y-auto">
            {filteredLanguages.map((language) => (
              <li
                key={language.code}
                onClick={() => {
                  setSelectedLanguage(language);
                  setIsOpen(false);
                  setSearch("");
                }}
                className="group flex cursor-pointer items-center px-6 py-3 text-primary hover:bg-secondary45"
              >
                <img
                  src={language.flag}
                  className="w-6 rounded-md border border-blax"
                  alt="flag of the country"
                />
                <div className="mx-3 h-3 w-[1px] bg-primary" />

                {/* Language name */}
                {/* <div className="group flex h-full w-full items-center justify-start gap-2">
                  <p className="transition-all duration-300 group-hover:w-0 group-hover:opacity-0">
                    {language.name}
                  </p>
                  <p className="transition-all duration-300 group-hover:opacity-100">
                    {language.originName}
                  </p>
                </div> */}
                {/* <div className="flex w-full flex-nowrap justify-start gap-1 text-nowrap text-right"> */}
                <a className="h-0 w-0 pr-0 opacity-0 transition-all duration-150 group-hover:h-fit group-hover:w-fit group-hover:pr-3 group-hover:font-black group-hover:text-accent group-hover:opacity-100">
                  {language.originName}
                </a>
                <p className="text-left opacity-100 transition-all duration-150 group-hover:tracking-widest group-hover:text-zinc-900 group-hover:opacity-0 group-hover:blur-sm">
                  {language.name}
                </p>
                {/* </div> */}
              </li>
            ))}

            {/* No matches found message */}
            {filteredLanguages.length === 0 && (
              <li className="px-4 py-2 text-primary">No matches found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
