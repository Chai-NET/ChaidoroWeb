const NotFound = () => {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-3 pb-32 text-center font-Outfit md:p-12">
      <h1 className="text-primary text-2xl font-semibold tracking-wider sm:text-3xl md:text-4xl">
        404: Page Not Found
      </h1>
      <p className="text-secondary tracking-tight">
        The page you're looking for does not exist.
      </p>
      <p className="text-secondary/30 select-none p-6 text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl 2xl:text-9xl">
        ( Ò ﹏ Ó )
      </p>
      <div className="bg-secondary/15 mt-12 size-16 rounded-full"></div>
      <div className="bg-secondary/10 size-12 rounded-full"></div>
      <div className="bg-secondary/10 size-9 rounded-full"></div>
      <div className="bg-secondary/5 size-6 rounded-full"></div>
      <div className="bg-secondary/5 size-3 rounded-full"></div>
      <div className="bg-secondary/5 size-1 rounded-full"></div>
    </div>
  );
};

export default NotFound;
