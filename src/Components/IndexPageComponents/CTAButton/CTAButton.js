const CTAButton = () => {
  return (
    <div className="sticky float-right inset-0 flex place-items-center p-5 animate-pulse md:hover:animate-none transition duration-200 ease-in-out">
      <button className="rounded-full p-2 md:p-3 md:m-5 bg-[#5865f2] focus:outline-none">
        <a
          href="https://discord.gg/htf5kJy5Ag"
          className="flex place-items-center rounded-full h-8 w-8"
        >
          <img
            src="/Assets/Images/Brands/Discord-Logo-White.svg"
            width={30}
            height={30}
            className="object-contain m-auto"
            alt="Discord-logo"
          />
        </a>
      </button>
    </div>
  );
};

export { CTAButton };
