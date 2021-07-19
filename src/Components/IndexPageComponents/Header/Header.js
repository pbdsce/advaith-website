import Link from "next/link";
import { SponsorImages } from "./SponsorImages";
import { ScrollDownIcon } from "../../svg/svg";
const SponsorImageList = [
  {
    ImgSrc: "coding-ninjas.svg",
    AltText: "Coding Ninjas",
    link: "",
    height: 80,
    width: 80,
  },
  {
    ImgSrc: "devfolio.svg",
    AltText: "Devfolio",
    link: "",
    height: 120,
    width: 120,
  },
];

const Header = () => {
  return (
    <div
      id="header-section"
      className="flex flex-col h-screen place-items-center p-10 space-y-10"
    >
      <div className="flex flex-col place-items-center w-full h-full m-auto md:w-1/2 space-y-3 md:space-y-5 mt-10 md:mt-36">
        <img
          src="/Assets/Images/header-logo.svg"
          priority="true"
          width={560}
          height={190}
          layout="intrinsic"
          alt="advaith-logo"
          className="object-contain"
        />
        <div className="text-theme-primary-550 text-center text-sm md:text-lg">
          <p>brought to you by</p>
          <p>ACM-W DSCE and {"Point Blank".toUpperCase()}</p>
        </div>
      </div>
      <p className="text-theme-primary-400 md:max-w-md text-center text-lg">
        {/* A week long technical fest with plethora of events: Hackathon, CTF,
        Coding Event, and DesignWars */}
        &mdash;&nbsp;{"The Technical Getaway 2021"}&nbsp;&mdash;
      </p>
      <div className="m-auto flex place-items-center md:transform transition duration-300 ease-in-out">
        <button
          disabled={true}
          id="header-register-button"
          className="antialiased px-5 py-2 text-xl bg-gray-400 rounded-sm font-semibold cursor-not-allowed"
        >
          <div
            className="flex place-items-center gap-3"
          >
            <p>{"Registerations Closed".toUpperCase()}</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146v40h-20c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40zm62.002-182H193.998v-40c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002v40z"></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col place-items-center mt-auto space-y-3">
          <p className="text-theme-primary-550 text-md md:text-xl">
            Powered By
          </p>
          <SponsorImages
            Sponsors={SponsorImageList}
            className="flex place-items-center m-auto w-full gap-10"
          />
        </div>
      </div>
      <div className="flex place-content-end h-full">
        <button className="focus:outline-none">
          <Link href="/#hackathon-section">
            <a>
              <ScrollDownIcon className="flex m-auto animate-bounce" />
            </a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export { Header };
