const NotFound = () => {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-3 pb-32 text-center font-Outfit md:p-12">
      <h1 className="text-2xl font-semibold tracking-wider text-chocolate sm:text-3xl md:text-4xl">
        404: Page Not Found
      </h1>
      <p className="tracking-tight text-coffee">
        The page you're looking for does not exist.
      </p>
      <p className="select-none p-6 text-5xl font-black tracking-tighter text-coffee/30 sm:text-7xl md:text-8xl 2xl:text-9xl">
        ( Ò ﹏ Ó )
      </p>
      <div className="mt-12 size-16 rounded-full bg-coffee/15"></div>
      <div className="size-12 rounded-full bg-coffee/10"></div>
      <div className="size-9 rounded-full bg-coffee/10"></div>
      <div className="size-6 rounded-full bg-coffee/5"></div>
      <div className="size-3 rounded-full bg-coffee/5"></div>
      <div className="size-1 rounded-full bg-coffee/5"></div>
    </div>
  );
};

export default NotFound;
