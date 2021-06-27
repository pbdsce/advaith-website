

const About = () => {
  return (
    <div className="flex justify-evenly place-items-center text-gray-200 space-y-5 p-7 text-justify container px-5 py-10 mx-auto">
      <div className="md:w-1/2 space-y-5">
        <div className="justify-start space-y-2">
          {/* <h2 className="text-4xl font-semibold tracking-wider">YeAH</h2> */}
          <div className="-ml-4">
            <img
              src="/Assets/Images/yeah-logo.png"
              width={150}
              height={70}
              className="object-contain"
            />
          </div>
          <h4 className="text-2xl text-theme-primary-500 font-semibold">
            Yet Another Hackathon
          </h4>
        </div>
        <div className="flex place-items-center text-lg space-x-2 font-semibold text-theme-primary-550">
          <h4 className="font-bold">Date:</h4>
          <p>20-26 July 2021</p>
        </div>
        <p className="md:text-lg">
          Our star event, a hackathon where students across India come together,
          network, and build the projects that they always wanted to have. The
          event strives to encourage participants to make an active impact in
          their community through innovation. Our goal is to create an
          environment for students to network, learn, develop, and create
          amongst each other. By providing a safe, supportive, and collaborative
          space where participants of all skill levels are inspired to “hack,”
          our mission of making an impact is accomplished.
        </p>
      </div>
      <div className="hidden md:block">
        <img
          src={"/Assets/Images/banner.png"}
          width={600}
          height={600}
          alt="Hackthon-Logo"
        />
      </div>
    </div>
  );
};

export { About };
