import Link from "next/link";
const About = () => {
  return (
    <div
      id="hackathon-section"
      className="flex justify-evenly place-items-center text-gray-200 space-y-5 p-7 text-justify container px-5 py-10 mx-auto"
    >
      <div className="md:w-1/2 space-y-5">
        <div className="justify-start space-y-2">
          {/* <h2 className="text-4xl font-semibold tracking-wider">YeAH</h2> */}
          <div className="-ml-4">
            <img
              src="/Assets/Images/yeah-logo.png"
              width={150}
              height={70}
              alt="YEAH (Hackathon)"
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
        <div className="md:text-lg text-gray-300 space-y-2">
          <p>
            <span className="font-bold">'YEAH', YEt Another Hackathon</span> is
            a 6 day hackathon organized by{" "}
            <Link href="https://pointblank.club">
              <a className="underline text-theme-primary-400 tracking-wide">
                Point Blank
              </a>
            </Link>{" "}
            and{" "}
            <Link href="https://acmw-dsce.github.io/">
              <a className="underline text-theme-primary-400 tracking-wide">
                ACM-W
              </a>
            </Link>{" "}
            chapter DSCE to provide students from colleges across India, with a
            platform to prove their development skills by solving some of the
            prevalent problems of all times. YEAH is an open invitation for
            creative minds to delve into their curiosities, learn something new,
            and build something awesome. Our goal is to create an environment
            for students to network, learn, develop, and create amazing stuff.
          </p>
          <p className="italic">
            Compete and bag home attractive prizes and goodies
          </p>
          <p className="italic">
            {" "}
            Make sure you have joined our discord server
          </p>
        </div>
        <div className="my-5">
          <div
            className="apply-button"
            data-hackathon-slug="yeah"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={"/Assets/Images/Saly-13.png"}
          width={600}
          height={600}
          alt="Hackthon-Logo"
        />
      </div>
    </div>
  );
};

export { About };
