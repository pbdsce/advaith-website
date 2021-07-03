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
      <div className="m-auto flex place-items-center md:transform transition duration-300 ease-in-out md:hover:scale-110">
        <button
          id="header-register-button"
          className="antialiased px-5 py-2 text-xl bg-theme-primary-400 rounded-sm font-semibold"
        >
          <a
            href="https://advaithtechfest.typeform.com/to/WVuhBpqL"
            className="flex place-items-center gap-3"
          >
            <p>{"Register".toUpperCase()}</p>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </a>
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
