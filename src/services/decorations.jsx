import ClockCHDR from "../img/drawings/clockCHDR.webp";
export default function Decorations() {
  // No script
  return (
    <div>
      {/* Clock Drawing for mainPage */}
      <img
        src={ClockCHDR}
        className="pointer-events-none visible absolute top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 sm:h-4/5 greta:h-3/5"
        alt="Clock Drawing"
      />
    </div>
  );
}
