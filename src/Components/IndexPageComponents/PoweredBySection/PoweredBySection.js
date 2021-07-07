const PoweredBySection = () => {
  return (
    <div className="w-full flex place-items-center bg-theme-card p-5">
      <div className="m-auto flex place-items-center gap-2 md:gap-5">
        <h3 className="text-theme-primary-600 text-lg md:text-2xl">
          Powered By
        </h3>
        <div className="flex place-items-center">
          <a href="https://simplelogin.io/">
            <img
              className="object-fit"
              src="/Assets/Images/PoweredBy/SimpleLogin.svg"
              alt="SimpleLogin"
              width={180}
              height={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export { PoweredBySection };
