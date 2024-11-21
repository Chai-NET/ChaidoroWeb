import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function SearchableDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: "🇬🇧",
  });

  const languages = [
    { name: "English", code: "en", flag: "🇬🇧" },
    { name: "Lithuanian | Lietuvių", code: "lt", flag: "🇱🇹" },
    { name: "Chinese | 中国人", code: "zh", flag: "🇨🇳" },
  ];

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative inline-block w-full text-chocolate">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`z-20 flex w-full items-center justify-between border-coffee bg-coffee/45 px-6 py-3 text-left text-chocolate shadow-sm outline-none transition-colors duration-300 hover:bg-coffee/65 ${
          isOpen ? "rounded-t-md border-x border-t" : "rounded-md border"
        }`}
      >
        <span className="flex items-center">
          <span className="">{selectedLanguage.flag}</span>
          <div className="mx-3 h-3 w-[1px] bg-chocolate"></div>
          {selectedLanguage.name}
        </span>
        <IoChevronDown
          className={`ml-2 h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-20 w-full overflow-clip rounded-b-xl border-x border-coffee bg-cream shadow-lg transition-opacity duration-300">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-b border-dashed border-coffee border-opacity-45 bg-cream px-6 py-3 outline-none placeholder:text-coffee/75 focus:ring-0"
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
                className="flex cursor-pointer items-center px-6 py-3 text-gray-700 hover:bg-coffee/45"
              >
                <span className="">{language.flag}</span>
                <div className="mx-3 h-3 w-[1px] bg-chocolate"></div>
                {language.name}
              </li>
            ))}

            {/* No Matches Found */}
            {filteredLanguages.length === 0 && (
              <li className="px-4 py-2 text-chocolate">No matches found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
