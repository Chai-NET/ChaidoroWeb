export default function ThemeSettings() {
  return (
    <div className="h-dvh overflow-auto">
      <div className="font-Outfit text-chocolate">
        <div className="my-3">
          <h1 className="text-2xl font-semibold">Themes</h1>
          <p className="">Custom premade themes.</p>
        </div>
        <div className="my-3 flex items-center justify-between gap-3">
          <div className="h-80 w-64 bg-chocolate"></div>
          <div className="h-80 w-64 bg-chocolate"></div>
          <div className="h-80 w-64 bg-chocolate"></div>
        </div>
        <div className="my-3 h-[1px] w-full bg-chocolate" />
        <div className="my-3">
          <h1 className="text-2xl font-semibold">Your Themes</h1>
          <p className="">You can make your own custom theme.</p>
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
