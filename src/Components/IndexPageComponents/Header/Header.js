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
      <div className="flex flex-col place-items-center w-full h-full m-auto md:w-1/2 space-y-10">
        <img
          src="/Assets/Images/header-logo.svg"
          priority="true"
          width={400}
          height={150}
          layout="intrinsic"
          alt="advaith-logo"
          className="object-contain"
        />
        <p className="text-theme-primary-550 text-sm md:text-lg">
          brought to you by ACM-W and Point Blank
        </p>
      </div>
      <p className="text-theme-primary-300 md:max-w-sm text-center">
        A week long technical fest with plethora of events : Hackathon, CTF,
        Coding Event, DesignWars
      </p>
      <div className="m-auto flex place-items-center md:transform transition duration-300 ease-in-out md:hover:scale-110">
        <div
          className="apply-button"
          data-hackathon-slug=" "
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col place-items-center mt-auto space-y-5">
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
          <Link href="/#events-section">
            <ScrollDownIcon className="flex m-auto animate-bounce" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export { Header };
