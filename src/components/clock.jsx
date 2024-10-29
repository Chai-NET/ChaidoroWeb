function Clock() {
  return (
    <>
      <div className="mt-3 flex items-center justify-center">
        <div className="w-full bg-chocolate py-32 text-center font-Outfit text-cream">
          <p className="font-RobotoCondensed font-light tracking-widest">
            03/15 tasks
          </p>
          <h1 className="text-5xl font-black tracking-wide md:text-8xl">
            25:00
          </h1>
        </div>
      </div>
    </>
  );
}

export default Clock;
